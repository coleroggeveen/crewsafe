
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
    'index.csr.html': {size: 11415, hash: '6805e48c4549ae6c0ed3a33ccafac0fa8737f4172dfaf7ded1402d525964af06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10072, hash: '09faf0a7909df5f97ea542355276fe851d69aa4fbfb3099c5988142f9173b0f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IJHHW5B2.css': {size: 17203, hash: 's/59yk6C6FA', text: () => import('./assets-chunks/styles-IJHHW5B2_css.mjs').then(m => m.default)}
  },
};
