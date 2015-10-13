var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simplevars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer-core');
var webpack = require('webpack');
var path = require("path");

module.exports = {

  entry:{
    app: ['webpack/hot/dev-server',"./app/index.js"]

  },
  output:{
       path: path.join(__dirname,"dist"),
       publicPath: "/dist/",
       filename: "bundle.js"
  },

  module: {
     loaders:[
       {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"},
       {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
       {test: /\.svg$/, loader: 'babel!svg-react'}
     ],
  },
  resolve: {

   extensions: ['','.js','.jsx']

 },

   postcss: [mixins, nested, simplevars, autoprefixer],

   plugins:[new webpack.HotModuleReplacementPlugin()]
};
