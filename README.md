# Background Removal Tool 🎨

一个基于 Next.js 16 和 React 19 构建的免费在线图片背景移除工具。

## ✨ 特性

- 🖼️ **拖拽上传** - 支持拖拽或点击上传图片
- 🤖 **AI 处理** - 使用智能算法自动移除背景
- 📱 **响应式设计** - 完美适配移动端和桌面端
- ⚡ **实时预览** - 即时查看处理效果
- 💾 **一键下载** - 处理完成后直接下载

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm (推荐)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 🛠️ 技术栈

- **前端框架**: Next.js 16
- **UI 框架**: React 19
- **样式**: Tailwind CSS v4
- **组件库**: Radix UI
- **语言**: TypeScript
- **包管理**: pnpm

## 📁 项目结构

```
├── app/                 # Next.js App Router
│   ├── api/            # API 路由
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 首页
├── components/         # React 组件
│   ├── ui/            # UI 组件库
│   ├── hero.tsx       # 首页 Hero 区域
│   ├── upload-editor.tsx # 图片上传编辑器
│   └── ...
├── hooks/             # React Hooks
├── lib/               # 工具函数
├── public/            # 静态资源
└── styles/            # 样式文件
```

## 🔧 API 集成

当前版本使用前端 Canvas 进行简单的背景移除演示。生产环境建议集成：

- [Remove.bg API](https://www.remove.bg/api)
- [Replicate](https://replicate.com)
- [Cloudinary Background Removal](https://cloudinary.com/documentation/background_removal)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交修改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Radix UI](https://www.radix-ui.com/) - 无样式 UI 组件
- [Lucide React](https://lucide.dev/) - 图标库

---

⭐ 如果这个项目对你有帮助，请给个 Star！