module.exports = {
  basePath: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
  assetPrefix: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
  trailingSlash: true,
  reactStrictMode: true,
}
