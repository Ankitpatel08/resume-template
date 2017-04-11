const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app : './src/app'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}

module.exports = config;