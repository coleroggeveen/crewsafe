
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://coleroggeveen.github.io/crewsafe/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@supabase/node-fetch/browser.js": [
    "chunk-LWS6YMF6.js"
  ]
},
  assets: {
    'index.csr.html': {size: 11424, hash: 'b4fe917d7efa9051c4101a3f915937c1a848875517e26422e2a1a63648d91dc0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10081, hash: 'a67a24a6947d75f6a5639a3a293f542e7257889be9bf5eeb64121fc263911d8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IJHHW5B2.css': {size: 17203, hash: 's/59yk6C6FA', text: () => import('./assets-chunks/styles-IJHHW5B2_css.mjs').then(m => m.default)}
  },
};
