// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin');
// If your plugin is using html-webpack-plugin as an optional dependency
// you can use https://github.com/tallesl/node-safe-require instead:

class CssDefer {
  apply (compiler) {
    compiler.hooks.compilation.tap('CssDefer', (compilation) => {
      console.log('The compiler is starting a new compilation...')

      // Static Plugin interface |compilation |HOOK NAME | register listener 
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'CssDefer', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the content 
          
          data.html = data.html.replace(/(<link.*\.css.*?)>/, "$1 defer>")

          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = CssDefer