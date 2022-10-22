const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.js",
    currentProjectComponents: "./src/currentProjectComponents.js",
    sidebarComponents: "./src/sidebarComponents.js",
    objectHandler: "./src/objectHandler.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};