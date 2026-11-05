import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'super-mortal',
  /** Will be used in index page & copyright declaration */
  author: 'Mortal',
  /** Description metadata for your website. Can be used in page metadata. */
  description:
    'super-mortal 技术博客：记录一个凡人程序员在 AI Agent、全栈开发与 DevOps 中的踩坑实录与开源实践，欢迎一起交流进步。',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: 'https://supermortal.cn/images/social-card.png',
  /** RSS feed: true = full text, false (default) = description only */
  rssFullText: true,
  /** 首页板块开关: 设为 false 整块隐藏（含导航入口逻辑由菜单自行控制） */
  sections: {
    about: true,
    projects: true,
    skills: false,
    categories: true,
    posts: true,
    education: true,
    techStack: true
  },
  /** 主题色 (hex 6 位). 不设则从 src/assets/styles/app.css 的 --primary 读. OG 图片背景用这个色. */
  // themeColor: '#5fa8d3',
  /** Specify the default language for this site. */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh-CN',
    // Date locale
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/touxiang.png',
    alt: '头像'
  },

  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    {
      tag: 'meta',
      attrs: { name: 'keywords', content: '博客,技术,编程,前端,后端,开发,超级凡人,supermortal' },
      content: ''
    }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: '博客', link: '/blog' },
      { title: '归档', link: '/archives' },
      { title: '分类', link: '/categories' },
      { title: '标签', link: '/tags' },
      { title: '项目', link: '/projects' },
      { title: '关于', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© 2026`,
    links: [
      // Privacy Policy link
      {
        title: 'sitemap',
        link: '/sitemap-index.xml',
        pos: 2 // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a "Astro & Pure theme powered" link in your site's footer. */
    credits: true
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: {
        style: 'user-select:none'
      }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8
  }
}

export const integ: IntegrationUserConfig = {
  // [Search]
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  // [Quote]
  quote: {
    // - Hitokoto
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: `(data) => (data.hitokoto || 'Error')`
    // - Quotable
    // https://github.com/lukePeavey/quotable
    // server: 'http://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
    // - DummyJSON
    server: 'https://v1.hitokoto.cn/?c=i',
    target: `(data) => (data.hitokoto || 'Error')`
  },
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // The style of blockquote font `normal` / `italic` (default to italic in typography)
    blockquoteStyle: 'italic',
    // The style of inline code block `code` / `modern` (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  // A lightbox library that can add zoom effect
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  }
}

/** 首页板块展示数量配置（开放博客，允许使用者自由调整） */
export const homepage = {
  /** 首页 Projects 板块最多展示多少个项目 */
  projectsMax: 2,
  /** 首页 Skills 板块最多展示多少个技能 */
  skillsMax: 2
}

/**
 * ICP 备案与公安备案信息
 *
 * 依据《非经营性互联网信息服务备案管理办法》第十三条：
 * 首页底部中央须标明备案编号，并链接工信部备案管理系统。
 * 备案号变更时只改这里，页脚会自动重新渲染。
 */
export const icp = {
  /** 备案编号，须与工信部系统登记完全一致（多人共用一个备案号时通常带 -1、-2 序号） */
  number: '粤ICP备2026172902号',
  /** 工信部备案管理系统地址（管局核验的固定入口，不要修改） */
  link: 'https://beian.miit.gov.cn/',
  /**
   * 公安联网备案号：办下来后填入真实编号，形如「粤公网安备 44010302000000号」
   *
   * 当前留空 —— 整行不渲染（不启用）。
   * 拿到真实编号后填在这里即可自动显示，图标紧随编号之前。
   */
  police: '',
  /**
   * 公安备案图标：官方要求图标显示在备案编号之前
   * 从 beian.mps.gov.cn 审核通过后下载「备案编号图标」，替换 public/images/ 下的同名文件即可
   * 留空 '' 则不显示图标
   */
  policeIcon: '/images/beian-police.svg'
}

/**
 * 备案登记的网站名称
 * 只用于浏览器标题（<title>）末尾，满足接入商「标题须完整包含备案名称」的核查要求；
 * 页面左上角的站点名仍取 theme.title（super-mortal），不受影响。
 */
export const filingName = '学习笔记'

/**
 * 页脚署名：显示站点名并可点击跳转到指定地址
 * 用于替代默认的 theme.author 署名
 */
export const footerAuthor = {
  /** 页脚显示的名字 */
  name: 'super-mortal',
  /** 点击跳转的地址；留空字符串 '' 则只显示文字、不带链接 */
  link: 'https://qm.qq.com/q/SDfOQZLLYy'
}

const config = { ...theme, integ } as Config
export default config


