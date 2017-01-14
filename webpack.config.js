var path = require('path')
var autoprefixer = require("autoprefixer");

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + "/dist/",
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel'
            },
            {
                test: /\.(scss|sass)?$/,
                exclude: /node-modules/,
                loader: 'style!css!postcss!sass'
            },
            {
                test: /\.css?$/,
                loader: "style!css"
            },
            {
                test:/\.(jpg|png|gif|jpeg)?$/,
                loader:'url'
            }
        ]
    },

    postcss: [ autoprefixer({ browsers: ['> 0.1%'] }) ],

    babel: {
        presets: ['es2015', 'stage-0', 'react']
    }
}
