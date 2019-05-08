
export default {
    treeShaking: true,
    history: 'hash',
    hash:true,
    plugins: [
      ['umi-plugin-react', {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//
          ],
        },
        hd:false,
        locale: {},
        library: 'react',
        dll: { 
          include:[],
          exclude: [],
        },
        hardSource: false,
        fastClick: true,
        title: 'default title',
        scripts: [
          // { src: 'https://github.com/' },
          // { src: '<%= PUBLIC_PATH %>a.js' },
          // { content: `alert('a');` },
        ],
        headScripts: [],
        metas: [
          { charset: 'utf-8' },
        ],
        links: [
          // { rel: 'stylesheet', href: 'http://cdn/a.css' },
        ],
      }],
    ],
  }
  