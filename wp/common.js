const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const loadCSS = require("./css").loadCSS;
const webpack = require('webpack')
const RemoveLogs = require('./log_remove_wp_plg_tmp.js');
const path = require('path');

exports.commonConfig = (mode) =>
{
    return merge([{

        entry: {
            main: ['./src/index.tsx']
        },
        // mode: 'development',
        optimization: {
            usedExports: true,
        },
        output: {
            filename: '[name].js',
            // publicPath: '/'
            // path: path.resolve( __dirname, '../dist'),
            publicPath: '/'

        },
        resolve: {

            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
            // fallback: {
            //     "fs": false,
            //     "path": require.resolve("path-browserify")
            // },
            alias: {
                react: 'preact-compat',
                'react-dom': 'preact-compat'
            }
        },
        module: {

            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
                // {
                //     test: /\.js$/,
                //     loader: 'preprocess-loader',
                // },
                // {
                //     test: /\.(jpg|png)$/,
                //     use: {
                //         loader: "url-loader",
                //         options: {
                //             limit: 25000,
                //         },
                //     },
                // },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "",
                template: (mode == "development" ? './wp/index_dev.ejs' : './wp/index.ejs'),
                // scriptLoading: 'blocking',
                filename: 'index.html',

                // templateParameters: { portfolio: JSON.stringify(require(path.resolve(__dirname + "../../statics/portfolio.json"))) },
            })
            // , new RemoveLogs({ options: true })
        ],
        stats: {
            hash: true,
            version: true,
            timings: true,
            children: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            chunks: false,
            modules: false,
            reasons: true,
            source: true,
            publicPath: true,

        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "initial",
                    },
                },
            },
        },
        /*
                optimization: {
                    runtimeChunk: 'single',
                    splitChunks: {
                     chunks: 'all',
                     maxInitialRequests: Infinity,
                     minSize: 0,
                     cacheGroups: {
                       vendor: {
                         test: /[\\/]node_modules[\\/]/,
                         name(module) {
                         // get the name. E.g. node_modules/packageName/not/this/part.js
                         // or node_modules/packageName
                         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                 
                       // npm package names are URL-safe, but some servers don't like @ symbols
                       return `npm.${packageName.replace('@', '')}`;
                       },
                     },
                   },
                  },
                 }
        */
        // externals: {
        //     //jquery: 'jQuery'
        //     preact: 'preact',
        //     preactRouter: 'preactRouter',
        //   },
    },
        // loadCSS(),

    ]);
}