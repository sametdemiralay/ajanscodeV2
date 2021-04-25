const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}