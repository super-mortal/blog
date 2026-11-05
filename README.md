# supermortal.cn

个人技术博客，记录 AI Agent、全栈开发与 DevOps 的实践笔记。

线上地址：<https://supermortal.cn>

## 技术栈

- **框架**：Astro 7 + Vite 8（Rolldown）
- **样式**：UnoCSS
- **内容**：Markdown + zod schema 校验
- **搜索**：Pagefind
- **部署**：腾讯云 EdgeOne（纯静态托管）

基于 [astro-theme-pure](https://github.com/cworld1/astro-theme-pure)

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 构建，产物在 dist/
npm run check    # 类型检查
```

## 部署

`npm run build` 产出纯静态文件到 `dist/`，上传至 EdgeOne 即可。

| 参数 | 值 |
| --- | --- |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node 版本 | 22 |

`prebuild` 钩子会自动为每篇文章生成 OG 封面图，输出到 `public/og/`。

## 目录结构

```
src/
├── content/blog/     文章（每篇一个目录 + index.md）
├── pages/            路由（含 rss.xml / robots.txt / llms.txt 生成器）
├── components/       站点组件
├── layouts/          布局
├── plugins/          自定义 markdown / shiki 插件
├── assets/           样式与图片
└── site.config.ts    站点配置（标题、页脚、备案号等）

packages/pure/        主题源码（npm workspaces）
scripts/              构建脚本（OG 图、字体）
public/               静态资源
```

## License

Apache 2.0，详见 [LICENSE](LICENSE)。
