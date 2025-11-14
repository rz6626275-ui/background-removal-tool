'use client'

import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-muted via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左侧文本内容 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
              免费在线移除图片背景
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              使用AI驱动的技术，一秒钟内将背景变透明。无需下载，无需复杂操作，只需上传图片即可。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-lg">
                开始使用
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                了解更多
              </button>
            </div>
          </div>

          {/* 右侧示例图片 */}
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-sm">
              {/* 前景示例 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center">
                <img 
                  src="/fashion-product-on-white-background.jpg" 
                  alt="Product example"
                  className="w-3/4 h-3/4 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="flex justify-center mt-12">
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
