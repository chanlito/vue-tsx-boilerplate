// @ts-check
const { resolve } = require('path');

const appName = 'App Name';
const appColor = '#42b883';

module.exports = {
  pwa: {
    name: appName,
    short_name: appName,
    themeColor: appColor,
    msTileColor: appColor,
  },
  chainWebpack: config => {
    ['normal-modules', 'normal', 'vue-modules', 'vue'].forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type)),
    );
    addVueJSXHotLoader(config);
  },
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, './src/assets/styles/variables.styl'),
        resolve(__dirname, './src/assets/styles/mixins.styl'),
      ],
    });
}

function addVueJSXHotLoader(config) {
  config.module
    .rule(/\.(j|t)sx$/)
    .test(/\.(j|t)sx$/)
    .use('vue-jsx-hot-loader')
    .before('babel-loader')
    .loader('vue-jsx-hot-loader');
}
