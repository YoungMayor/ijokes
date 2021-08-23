import path from 'path'
import fs from 'fs'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'iJokes',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'For the love of laughs...' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'balm-ui/dist/balm-ui.css',
        'fullpage.js/dist/fullpage.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/balm-ui',
        '@/plugins/fullpage',
        '@/plugins/joke-api',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://v2.jokeapi.dev/joke',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        // icon: {
        //     fileName: 'icon/round.png'
        // },
        meta: {
            name: 'Modern Jokes',
            author: 'Meyoron Aghogho',
            description: 'For the love of laughs',
            theme_color: '#1e1e1ecc',

            'og:type': 'website'
        },
        manifest: {
            name: 'Modern Jokes',
            lang: 'en',
            // useWebmanifestExtension: false,
            short_name: 'iJokes',
            background_color: '#1e1e1ecc'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    server: {
        host: '0.0.0.0',
        // port: '3000',
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
            cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
        }
    }
}