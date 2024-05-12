import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon';

const build = {
  baseURL: '/',
  outDir: './dist',
  siteURL: 'http://localhost:4321/'
}

const env = process.env.NODE_ENV

switch (env) {
  case 'pages':
    build.baseURL = '/'
    build.siteURL = 'https://yashgangwar.github.io'
    break

  case 'production':
    build.baseURL = '/'
    build.siteURL = 'https://yashgangwar.github.io'
    break

  default:
    break
}

// https://astro.build/config
export default defineConfig({
  site: build.siteURL,
  base: build.baseURL,
  outDir: build.outDir,
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})