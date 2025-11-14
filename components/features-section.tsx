'use client'

import { Zap, ShieldCheck, Image, Lightbulb } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: '超快速处理',
    description: '1-5秒内完成背景移除，不需要等待。使用最新的AI算法实现快速处理。',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: '100%安全隐私',
    description: '您的图片不会被保存或分享。处理完成后立即删除，确保您的隐私。',
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: '高质量输出',
    description: '保持原始图片的高分辨率和细节，确保最佳的视觉效果。',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: '无需技能',
    description: '简单易用的界面，无需任何专业技能即可轻松使用。',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 insMind</h2>
          <p className="text-muted-foreground text-lg">
            我们提供业界领先的背景移除解决方案
          </p>
        </div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
