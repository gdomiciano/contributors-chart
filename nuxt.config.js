module.exports = {
    build: {
        vendor: [ 'axios' ],
        extend(config, ctx) {
            // if (ctx.isClient) {
            //     config.module.rules.push({
            //         enforce: 'pre',
            //         test: /\.(js|vue)$/,
            //         loader: 'eslint-loader',
            //         exclude: /(node_modules)/,
            //         // options: {
            //         //     fix: true,
            //         // },
            //     });
            // }

            const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            urlLoader.test = /\.(png|jpe?g|gif)$/;

            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
        },
    },

    head: {
        title: 'Contriburtor\'s Chart',

    },

    loading: { color: '#F3AF92' },

    manifest: {
        name: 'Contributor\'s Chart' ,
        description: 'Check the contributions for each GitHub repo',
        theme_color: '#44AFF4',
        lang: 'en',
    },

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],
}
