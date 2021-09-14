const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PurgecssPlugin = require('purgecss-webpack-plugin')
const path = require('path')
const glob = require('glob')
// const sassfunctions = require(__dirname + "/sass_functions/sassfn.js").sassfn;
const CssDefer = require(path.join(__dirname, './css_defer.js'));
// console.log(sassfunctions);
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const PATHS = {
  src: path.join(__dirname, '../src')
}
console.log("xxx--->> pathh:" , PATHS);
exports.extractCSS = (/*{ include, exclude, use = [] }*/) =>
{
  // Output extracted CSS to a file
  const plugins = [new MiniCssExtractPlugin({
    filename: "styles/[name].css",
    attributes: {
      "media": "all",
      "defer": "defer"
    }
  }),
  // new CssDefer(),
  new HTMLInlineCSSWebpackPlugin(),

];

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          // include,
          // exclude,

          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ],
        },
        {
          test: /\.scss$/,

          use: [MiniCssExtractPlugin.loader, "css-loader",
          {
            loader: 'resolve-url-loader',
            // options: {...}
          },
          {
            loader: "sass-loader",
            options: {
              // includePaths: ['node_modules']
              // outputStyle: 'compressed',,

              sourceMap: false,
            }
          }

          ],
          //     use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: plugins
      // new PurgecssPlugin({
      //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      // }),
    ,
  };
};
exports.loadCSS = ({ include, exclude } = {}) =>
{
  // const plugin = new MiniCssExtractPlugin({
  //   filename: "styles/[name].css",
  // });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,

          //    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],,'preprocess-loader'
          use: ["style-loader", "css-loader",
            // {
            //   loader: 'resolve-url-loader',
            //   // options: {...}
            // },
            {
              loader: "sass-loader",
              options: {
                // sourceMap: true
                // sassOptions: {
                //   functions: sassfunctions
                // }
              }

            },
          ],
        },
        //plugins: [plugin],
      ]
    }
  }
};