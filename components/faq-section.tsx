'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: '这个工具是免费的吗？',
    answer: '是的，insMind的背景移除工具完全免费。您可以无限次上传和处理图片，无需注册或付费。我们致力于为所有用户提供高质量的图片处理服务。',
  },
  {
    id: 2,
    question: '我的图片数据会被保存吗？',
    answer: '不会。您上传的图片仅在处理期间使用，处理完成后立即删除。我们不会保存或分享您的任何个人数据。您的隐私和安全是我们的最高优先级。',
  },
  {
    id: 3,
    question: '支持哪些图片格式？',
    answer: '我们支持所有常见的图片格式，包括 PNG、JPG、JPEG、WebP、GIF 等。建议使用高分辨率的图片以获得最佳效果。',
  },
  {
    id: 4,
    question: '处理需要多长时间？',
    answer: '通常背景移除处理只需 1-5 秒钟。速度取决于图片的大小和您的网络连接速度。大多数图片都能在几秒内完成处理。',
  },
  {
    id: 5,
    question: '处理后的图片质量如何？',
    answer: '我们使用最先进的AI技术确保处理质量。对于大多数清晰的图片，移除效果非常好。如果背景复杂或颜色与主体接近，可能需要手动调整。',
  },
  {
    id: 6,
    question: '可以批量处理多张图片吗？',
    answer: '目前我们支持逐张处理。但您可以快速地一张接一张上传和处理多张图片。我们正在开发批量处理功能，敬请期待。',
  },
  {
    id: 7,
    question: '如何获得最佳效果？',
    answer: '为了获得最佳效果，建议：1) 使用高分辨率图片 2) 确保背景与主体有明显的颜色差异 3) 避免半透明或复杂的背景 4) 如果结果不理想，可以尝试调整容差设置。',
  },
  {
    id: 8,
    question: '有没有使用次数限制？',
    answer: '没有限制。您可以无限次使用我们的服务。无论您是个人用户还是企业用户，都可以自由使用。',
  },
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
          <p className="text-muted-foreground text-lg">
            找不到答案？请联系我们的支持团队
          </p>
        </div>

        {/* FAQ列表 */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              {/* 问题头部 */}
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* 答案内容 */}
              {expandedId === faq.id && (
                <div className="px-6 py-4 border-t border-border bg-muted/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 联系支持 */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">还有其他问题？</h3>
          <p className="text-muted-foreground mb-6">
            我们的支持团队随时准备帮助您
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            联系支持
          </button>
        </div>
      </div>
    </section>
  )
}
