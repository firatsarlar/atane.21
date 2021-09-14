const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");
// const CriticalCssPlugin = require('critical-css-webpack-plugin')

exports.productionConfig = () => {
    return {
        optimization: {

            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: './src/static_assets',
                        globOptions: {
                            ignore: ["*/**/__/**", "*/**/Thumbs.db"]
                        }
                    }
                ],
            }),
            // new CriticalCssPlugin({
            //     // base: path.join(path.resolve(__dirname), 'dist/'),
            //     base: 'dist/',
            //     src: 'index.html',
            //     inline: true,
            //     minify: true,
            //     extract: true,
            //     width: 375,
            //     height: 565,
            //     penthouse: {
            //         blockJSRequests: false,
            //     }
            // }),

        ],
    }
};