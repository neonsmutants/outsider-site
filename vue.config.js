module.exports = {
publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    pluginOptions: {
        sitemap: {
            urls: [
                'http://www.outsideronline.co/'
            ]
        }
    }
}