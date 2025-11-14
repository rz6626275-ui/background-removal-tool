'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">insMind</h3>
            <p className="text-muted-foreground text-sm">
              使用AI技术轻松移除图片背景，让您的图片更专业。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">背景移除</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">图片编辑</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">价格</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">公司</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">关于我们</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">博客</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">法律</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">隐私政策</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">服务条款</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie政策</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 insMind. 保留所有权利。
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
