const path = require("path");

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.BASE_URL,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.reesolve(__dirname, "./src/styles/main.scss")]
    }
  }
}