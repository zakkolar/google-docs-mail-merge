const components = require('./components.js');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean');


const path = require('path');

const outputPath = path.resolve(__dirname, 'dist/ui');


const HtmlPlugins = components.map((component)=>{
    return new HtmlWebpackPlugin({

        filename: path.basename(component.html),
        template: component.html,
        chunks: [component.id],
        inlineSource: '.(js|css)$',
    })
});

const entry = {};

components.forEach((component)=>{
    entry[component.id] = component.js;
})

module.exports = {
    entry: entry,
    output: {
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ].concat(HtmlPlugins).concat([
        new HtmlWebpackInlineSourcePlugin(),
        new WebpackCleanPlugin(components.map((component)=>{
            return path.basename(component.js)
        }), {basePath: outputPath})
    ]),
};