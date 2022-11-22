
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};