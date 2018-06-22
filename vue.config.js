const { resolve } = require('path');

const EXAMPLE_PATH = resolve(__dirname, 'example');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: [
      EXAMPLE_PATH + '/main.ts',
    ],
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true } },
      ]
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = EXAMPLE_PATH + '/index.html'
        return args;
      })
  }
}