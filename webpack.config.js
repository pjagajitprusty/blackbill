var webpack = require('webpack');

module.exports = {
  entry : './src/app.js',
  output : {
    path : './public',
    filename : 'bundle.js'
  },
  devServer : {
    inline : true,
    contentBase : './public',
    port : '4000'
  },
  module : {
    loaders : [
      {
        test: /\.js$/,
        exclude : /(node_modules | server.js)/,
        loader : 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
          test: /\.css$/,
          loader: 'style!css!autoprefixer'
      },
      {
          test: /\.scss/,
          loader: 'style!css!autoprefixer!sass'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
 ]
}
