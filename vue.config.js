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
    addStyleResource(config.module.rule('stylus').oneOf('vue'));
    addStyleResource(config.module.rule('stylus').oneOf('normal'));
    addStyleResource(config.module.rule('stylus').oneOf('vue-modules'));
    addStyleResource(config.module.rule('stylus').oneOf('normal-modules'));
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
