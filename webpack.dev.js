/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        disableHostCheck: true
    }
});