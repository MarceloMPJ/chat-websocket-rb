const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const { ProvidePlugin } = require('webpack')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.plugins.append('Provide',
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)
environment.loaders.prepend('vue', vue)

module.exports = environment
