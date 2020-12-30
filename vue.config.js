module.exports = {
publicPath: process.env.NODE_ENV === 'production'
    ? '/preprod/outsider-site/'
    : '/'
}