import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'



const aliases = [
    {
        find: /^@(.*)$/, // Регулярное выражение для совпадения с префиксом @
        replacement: '$1', // Замена на сам путь без префикса
        dir: 'src',
        prefix: '',
        deep: true,
        depth: 1,
        createLog: false,
        logPath: 'src/logs',
        createGlobalAlias: true,
        adjustDuplicates: false,
        useAbsolute: false,
        useIndexes: false,
        useConfig: true,
        ovrConfig: false,
        dts: false,
        silent: true,
    },
    {
        find: /^@(.*)$/, // Регулярное выражение для совпадения без префикса
        replacement: '$1', // Замена на сам путь без префикса
        dir: 'src',
        prefix: '@', // Пустой префикс для второго алиаса
        deep: true,
        depth: 1,
        createLog: false,
        logPath: 'src/logs',
        createGlobalAlias: true,
        adjustDuplicates: false,
        useAbsolute: false,
        useIndexes: false,
        useConfig: true,
        ovrConfig: false,
        dts: false,
        silent: true,
    },
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      ...aliases.map(ViteAliases),
      reactRefresh(),

  ],


})
