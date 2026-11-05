import type { APIRoute } from 'astro'

import { getBlogCollection, getPostSlug, sortMDByDate } from 'astro-pure/server'
import config from '@/site-config'

const siteUrl = (path: string) => new URL(path.replace(/^\/?/, '/'), import.meta.env.SITE).href

export const GET: APIRoute = async () => {
  const posts = sortMDByDate(await getBlogCollection())

  const coreLinks = [
    { href: '/', title: '首页' },
    { href: '/about', title: '关于我' },
    { href: '/archives', title: '文章归档' },
    { href: '/blog', title: '博客文章列表' },
    { href: '/categories', title: '全部分类' },
    { href: '/tags', title: '全部标签' },
    { href: '/rss.xml', title: 'RSS 订阅' }
  ].map(({ href, title }) => `- [${title}](${siteUrl(href)}): ${title}`)

  // 按分类分组，组内按发布日期倒序；每条带日期与标签，便于 AI 判断时效性与主题
  const grouped = new Map<string, typeof posts>()
  for (const post of posts) {
    const key = post.data.category || '未分类'
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key)!.push(post)
  }

  const articleSections = [...grouped.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .map(([category, list]) => {
      const lines = list.map((post) => {
        const date = post.data.publishDate.toISOString().slice(0, 10)
        const tags = post.data.tags?.length ? ` · ${post.data.tags.join(' / ')}` : ''
        const url = siteUrl(`/blog/${getPostSlug(post)}`)
        return `- [${post.data.title}](${url}) — ${date}${tags}: ${post.data.description}`
      })
      return `### ${category}（${list.length} 篇）\n\n${lines.join('\n')}`
    })

  const lastUpdated = posts[0]?.data.publishDate.toISOString().slice(0, 10) ?? ''

  const text = `# ${config.title}

> ${config.description}

共 ${posts.length} 篇文章，最后更新 ${lastUpdated}。

## Core pages

${coreLinks.join('\n')}

## Articles

${articleSections.join('\n\n')}
`

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
}
