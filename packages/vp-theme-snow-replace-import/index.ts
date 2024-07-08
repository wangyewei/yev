import { createFilter, Plugin, FilterPattern } from 'vite'

interface VPThemeSnowReplaceImportOptions {
  include?: FilterPattern
  exclude?: FilterPattern
}

export default function VPThemeSnowReplaceImport(
  options: VPThemeSnowReplaceImportOptions = {}
): Plugin {
  const filter = createFilter(options.include || '**/*.ts', options.exclude)

  return {
    name: 'replace-import-plugin',
    transform(code, id) {
      if (!filter(id)) return null

      // 替换 import 语句
      const newCode = code
        .replace(
          "import YevTheme from 'vitepress-theme-snow/src/index.ts'",
          "import YevTheme from 'vitepress-theme-snow'"
        )
        .replace(
          "import 'vitepress-theme-snow/src/styles/index.css'",
          "import 'vitepress-theme-snow/dist/styles/index.css'"
        )

      return {
        code: newCode,
        map: null
      }
    }
  }
}
