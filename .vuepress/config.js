module.exports = {
    base: '/boke/',
    title: '耶温 · 愿你眼里有光，心里有爱',
    themeConfig: {
        logo: 'https://iyuwb.gitee.io/boke/assets/img/logo.jpg',
        search: false,
        displayAllHeaders: true,
        smoothScroll: true,
        nextLinks: true,
    },
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://iyuwb.gitee.io/boke/assets/img/logo.jpg'
        }]
    ],
    configureWebpack: {
        output: {
            publicPath: 'https://iyuwb.gitee.io/boke/'
        }
    },
}