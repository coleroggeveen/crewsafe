
export default {
  basePath: 'https://coleroggeveen.github.io/crewsafe',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
