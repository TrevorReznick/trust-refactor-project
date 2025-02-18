
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/default/dev/prod/Di-Falco-Immbobiliare/trust-refactor-estate/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
