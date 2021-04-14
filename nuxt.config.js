
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Produits artisanaux et cuisine de terroir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My-Terroir vous propose son expertise en matière de produits de terroir, fromages, charcuteries et viandes. Découvrez également les prestations traiteur des produits de terroir.'},
      { name: 'keywords', content: 'terroir, traiteur, produits, fromages, charcuteries, charcuterie, fromage, viande, viandes, cuisine, producteurs, mariage, réception, séminaire. '},
      { hid: 'image', name: 'image', content: './static/icon.png'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Produits artisanaux et cuisine de terroir'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'My-Terroir vous propose son expertise en matière de produits de terroir, fromages, charcuteries et viandes. Découvrez également les prestations traiteur des produits de terroir.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: './static/icon.png'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/cvz2sdi.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
