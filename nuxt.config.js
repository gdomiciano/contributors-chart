module.exports = {
    build: {
        vendor: [ 'axios' ],
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true,
                    },
                });
            }
        },
        analyze: true,
        extractCSS: true,
    },
    generate: {
        minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeAttributeQuotes: false,
            removeComments: false,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            removeTagWhitespace: false,
            sortAttributes: true,
            sortClassName: true,
            trimCustomFragments: true,
            useShortDoctype: true
        }
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
