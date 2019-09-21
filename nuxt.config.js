const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/contributors-chart/'
    }
} : {}

module.exports = {
    server: {
        port: 8000,
        host: "0.0.0.0",
    },
    ...routerBase,
    build: {
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
        analyze: false,
        extractCSS: true,
    },

    head: {
        title: 'Contriburtor\'s Chart',
    },

    loading: {color: '#F3AF92'},

    manifest: {
        name: 'Contributor\'s Chart',
        description: 'Check the contributions for each GitHub repo',
        theme_color: '#272727',
    },

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],
}
