module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.module.rule('js')
        .use('istanbul')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true });
      
      config.output
        .devtoolModuleFilenameTemplate('coverage')

      config.devtool('inline-cheap-module-source-map');
    }
  }
}