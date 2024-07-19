import type { Plugin } from 'vite'
import { Dirent, promises as fs } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface VPThemeSnowAutoArticleOptions {
  base?: string
  output?: string
  ignores?: string[]
}

export type Article = {
  title: string
  url: string
}

const IGNORE_FILES_ARR = ['node_modules', '.git', '.github', '.vscode']

export default function VPThemeSnowAutoArticlePlugin(
  options: VPThemeSnowAutoArticleOptions = {}
): Plugin {
  const { base = '.', output = '.vitepress/articles.json' } = options
  let { ignores = [] } = options
  ignores = ignores.concat(IGNORE_FILES_ARR)

  return {
    name: 'vp-theme-snow-auto-article-plugin',
    async buildStart() {
      const articles = await scanArticles(base, ignores)
      await fs.writeFile(output, JSON.stringify(articles, null, 2))
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/__generate_articles') {
          const articles = await scanArticles(base, ignores)
          await fs.writeFile(output, JSON.stringify(articles, null, 2))
          res.end('Articles JSON generated')
        } else {
          next()
        }
      })
    }
  }
}

async function scanArticles(
  base: string,
  ignores: string[]
): Promise<Article[]> {
  const articles: Article[] = []

  const entries = await fs.readdir(base, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(base, entry.name)
    if (shouldSkip(entry, ignores)) {
      continue
    }
    if (entry.isDirectory()) {
      const indexPath = join(fullPath, 'index.md')
      try {
        await fs.access(indexPath)
        const nestedArticles = await scanArticles(fullPath, ignores)
        articles.push(...nestedArticles)
      } catch (err) {
        continue
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const fileContent = await fs.readFile(fullPath, 'utf-8')
      const { data } = matter(fileContent)
      const key = entry.name.replace('.md', '')
      articles.push({ title: data.title || key, url: fullPath })
    }
  }

  return articles
}

function shouldSkip(file: Dirent, ignores: string[]): boolean {
  return ignores.some((ignore) => file.name.includes(ignore))
}
