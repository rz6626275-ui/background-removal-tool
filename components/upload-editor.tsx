'use client'

import { useState, useRef } from 'react'
import { Upload, Loader2, Download, RotateCcw } from 'lucide-react'

interface UploadEditorProps {
  onProcessComplete?: (url: string) => void
}

export function UploadEditor({ onProcessComplete }: UploadEditorProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      setError('文件太大，请上传小于10MB的图片')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setUploadedImage(result)
      setProcessedImage(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const processImage = async () => {
    if (!uploadedImage) return

    setIsProcessing(true)
    setError(null)

    try {
      // 方案：可以集成以下服务之一
      // 1. Remove.bg API (需要API KEY)
      // 2. Replicate (需要API KEY)
      // 3. 本地TensorFlow.js模型

      // 这里演示使用本地Canvas处理
      const canvas = canvasRef.current
      if (!canvas) throw new Error('Canvas not available')

      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = uploadedImage
      })

      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Canvas context not available')

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // 简单的背景移除算法：将单色背景转为透明
      // 这是一个演示实现，生产应使用AI服务
      const backgroundColor = detectBackgroundColor(data)
      removeBackgroundColor(data, backgroundColor)

      ctx.putImageData(imageData, 0, 0)
      const resultUrl = canvas.toDataURL('image/png')
      
      setProcessedImage(resultUrl)
      onProcessComplete?.(resultUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : '处理失败')
      console.error('Error:', err)
    } finally {
      setIsProcessing(false)
    }
  }

  const detectBackgroundColor = (data: Uint8ClampedArray): [number, number, number] => {
    // 简单检测：获取四个角的像素，取主要颜色
    const corners = [0, data.length - 400, 200, data.length - 200]
    const colors: { [key: string]: number } = {}

    corners.forEach(idx => {
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]
      const key = `${r},${g},${b}`
      colors[key] = (colors[key] || 0) + 1
    })

    const maxColor = Object.entries(colors).sort((a, b) => b[1] - a[1])[0]?.[0]
    if (!maxColor) return [255, 255, 255]
    
    const [r, g, b] = maxColor.split(',').map(Number)
    return [r, g, b]
  }

  const removeBackgroundColor = (
    data: Uint8ClampedArray,
    [bgR, bgG, bgB]: [number, number, number]
  ) => {
    // 允许颜色相似度范围
    const tolerance = 30

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]

      // 检查是否接近背景色
      if (
        Math.abs(r - bgR) < tolerance &&
        Math.abs(g - bgG) < tolerance &&
        Math.abs(b - bgB) < tolerance
      ) {
        data[i + 3] = 0 // 设置透明
      }
    }
  }

  const downloadImage = () => {
    if (!processedImage) return

    const link = document.createElement('a')
    link.href = processedImage
    link.download = `removed-background-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const reset = () => {
    setUploadedImage(null)
    setProcessedImage(null)
    setError(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">开始处理</h2>
          <p className="text-muted-foreground text-lg">
            上传您的图片，我们会自动移除背景
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 上传区 */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">上传图片</h3>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 border-2 border-dashed border-border rounded-xl p-8 hover:border-primary cursor-pointer transition-colors flex flex-col items-center justify-center bg-muted/50 min-h-80"
            >
              {uploadedImage ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-semibold text-foreground mb-2">点击上传或拖拽图片</p>
                  <p className="text-sm text-muted-foreground">支持 PNG, JPG, WebP 格式</p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* 结果展示区 */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">处理结果</h3>
            <div className="flex-1 border-2 border-border rounded-xl p-8 bg-muted/50 min-h-80 flex items-center justify-center">
              {processedImage ? (
                <div className="checkered-bg p-4 rounded-lg w-full h-full flex items-center justify-center">
                  <img
                    src={processedImage || "/placeholder.svg"}
                    alt="Processed"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : isProcessing ? (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <p className="text-muted-foreground">处理中...</p>
                </div>
              ) : (
                <p className="text-muted-foreground text-center">
                  处理后的图片将显示在这里
                </p>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {uploadedImage && !processedImage ? (
            <button
              onClick={processImage}
              disabled={isProcessing}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  处理中...
                </>
              ) : (
                '移除背景'
              )}
            </button>
          ) : null}

          {processedImage ? (
            <>
              <button
                onClick={downloadImage}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                下载图片
              </button>
              <button
                onClick={reset}
                className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                重新处理
              </button>
            </>
          ) : null}
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </section>
  )
}
