const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css')

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js'
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        //mode: "development",
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug',
                inject: 'body',
                scriptLoading: 'defer'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog'],
                template: PATHS.source + '/pages/blog/blog.pug',
                inject: 'body',
                scriptLoading: 'defer'
            }),
        ],
    },
    devserver(),
    pug(),
    sass(),
    css(),
]);

const developmentConfig = {
    mode: "development",
    devtool: 'source-map'
};

module.exports = function (env) {
    const isProduction = env === 'production';
    const isDevelopment = env === 'development';

    const config = {
        ...common,
        mode: isProduction ? 'production' : 'development', // установка режима 
    };

    if (isDevelopment) {
        config.devtool = 'source-map'; // специфичные настройки для разработки
    }

    return config;
};