module.exports = {
    /*
    ** Build configuration
    */
    build: {
        vendor: [ 'axios' ],
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    // options: {
                    //     fix: true,
                    // },
                });
            }

            const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            urlLoader.test = /\.(png|jpe?g|gif)$/;

            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
        },

    },
    /*
    ** Headers
    ** Common headers are already provided by @nuxtjs/pwa preset
    */
    head: {
        title: 'Contriburtors Chart'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Customize app manifest
    */
    manifest: {
        theme_color: '#44AFF4'
    },
    /*
    ** Modules
    */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],

    proxy: [
        ['/api', { target: 'https://api.github.com' }],
    ],
}
