
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@supabase/node-fetch/browser.js": [
    "chunk-LWS6YMF6.js"
  ]
},
  assets: {
    'index.csr.html': {size: 11375, hash: '39f47e13f046f180d0fe0d8e241bbfbeeff0fd23ea95bd79f4053034505648b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10032, hash: 'd58afd240d7211991183714dd98780d71a41a4e6210b209171a4f4f0cccd25b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IJHHW5B2.css': {size: 17203, hash: 's/59yk6C6FA', text: () => import('./assets-chunks/styles-IJHHW5B2_css.mjs').then(m => m.default)}
  },
};
