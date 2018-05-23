const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['preset-env']
        }
      }
    },
    {
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }
  ],
  plugins: [
    new VueLoaderPlugin()
  ]
}