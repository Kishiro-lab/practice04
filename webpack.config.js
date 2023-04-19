const path = require('path');

module.exports = {
  mode: 'development',
  entry: {'index': path.resolve(__dirname, './src/pages/index.js'),        
  },
  output: {
    path: path.resolve(__dirname, './docs/'),
    filename: 'js/[name].js',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./docs/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
    ],
  },
};