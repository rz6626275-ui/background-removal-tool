'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white text-sm font-bold">
              i
            </div>
            <span>insMind</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              首页
            </Link>
            <Link href="#examples" className="text-foreground hover:text-primary transition-colors font-medium">
              案例
            </Link>
            <Link href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
              常见问题
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-lg border border-border hover:bg-muted transition-colors font-medium">
              登录
            </button>
            <button className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors font-medium">
              注册
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
