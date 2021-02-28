module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/finalproject/' // finalproject 為 repo 名稱
    : '/'
}