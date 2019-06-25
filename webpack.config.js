const components = require('./components.js');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean');

const GasPlugin = require("gas-webpack-plugin");

var WebpackOnBuildPlugin = require('on-build-webpack');

const path = require('path');

const outputPath = path.resolve(__dirname, 'dist/ui');




const ClaspPush = new WebpackOnBuildPlugin(function(stats){
    const { exec } = require('child_process');
    exec("clasp push")
});


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

const clientConfig = {
    entry: entry,
    watch: true,
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
        }), {basePath: outputPath}),
        ClaspPush,
    ]),
};

const serverConfig = {
    entry: './src/server/Main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'Main.js',
        path: path.resolve(__dirname, 'dist/server')

    },
    plugins: [
        new CleanWebpackPlugin(),
        new GasPlugin(),
        ClaspPush,
    ],
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
}


module.exports = [clientConfig, serverConfig];