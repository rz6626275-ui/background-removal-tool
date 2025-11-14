'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Example {
  id: number
  category: string
  title: string
  before: string
  after: string
}

const examples: Example[] = [
  {
    id: 1,
    category: '电商产品',
    title: '商品展示',
    before: '/product-with-background.jpg',
    after: '/product-transparent-background.jpg',
  },
  {
    id: 2,
    category: '人物肖像',
    title: '证件照处理',
    before: '/portrait-with-background.jpg',
    after: '/portrait-transparent-background.jpg',
  },
  {
    id: 3,
    category: '商品拍摄',
    title: '包包移除背景',
    before: '/bag-product-photography.jpg',
    after: '/bag-transparent-background.jpg',
  },
  {
    id: 4,
    category: '家居用品',
    title: '家具处理',
    before: '/furniture-with-background.jpg',
    after: '/furniture-transparent-background.jpg',
  },
  {
    id: 5,
    category: '食品摄影',
    title: '美食展示',
    before: '/food-with-background.jpg',
    after: '/food-transparent-background.jpg',
  },
  {
    id: 6,
    category: '珠宝首饰',
    title: '饰品展示',
    before: '/jewelry-with-background.jpg',
    after: '/jewelry-transparent-background.jpg',
  },
]

export function ExamplesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const itemsPerPage = 3
  const totalPages = Math.ceil(examples.length / itemsPerPage)
  const visibleExamples = examples.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  return (
    <section id="examples" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">案例展示</h2>
          <p className="text-muted-foreground text-lg">
            查看真实用户的处理效果
          </p>
        </div>

        {/* 案例网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              onMouseEnter={() => setHoveredId(example.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* 标签 */}
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  {example.category}
                </span>
              </div>

              {/* 标题 */}
              <div className="px-6 py-2">
                <h3 className="font-semibold text-lg text-foreground">{example.title}</h3>
              </div>

              {/* 对比图 */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                {hoveredId === example.id ? (
                  // 悬停时显示处理后的图片
                  <div>
                    <img
                      src={example.after || "/placeholder.svg"}
                      alt={`${example.title} - 处理后`}
                      className="w-full h-full object-cover checkered-bg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center p-4">
                      <span className="text-white text-sm font-medium">处理后</span>
                    </div>
                  </div>
                ) : (
                  // 默认显示处理前的图片
                  <div>
                    <img
                      src={example.before || "/placeholder.svg"}
                      alt={`${example.title} - 处理前`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center p-4">
                      <span className="text-white text-sm font-medium">处理前</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 分页导航 */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg border border-border hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-border'
                }`}
                aria-label={`Page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-lg border border-border hover:bg-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
