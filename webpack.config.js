const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp?g|svg|webp)$/,
        use:[{
          loader: "url-loader",
          options:{
            limit: 5000,
            name: "images/[name].[hash:8].[ext]",
          }
        }]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }  
          }
        ]
      }
    ]
  },
  plugins:[
    new MinifyPlugin({}, {
      comments: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  }
}