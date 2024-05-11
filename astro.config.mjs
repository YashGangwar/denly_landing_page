import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon';

const build = {
  baseURL: '/',
  siteURL: 'http://localhost:4321/'
}

const env = process.env.NODE_ENV

switch (env) {
  case 'pages':
    build.baseURL = '/denly-landing-page/'
    build.siteURL = 'https://yashgangwar.github.io'
    break

  case 'production':
    build.baseURL = '/denly-landing-page/'
    build.siteURL = 'https://yashgangwar.github.io'
    break

  default:
    break
}

// https://astro.build/config
export default defineConfig({
  site: build.siteURL,
  base: build.baseURL,
  integrations: [
    icon(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})
