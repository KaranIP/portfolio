const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
  entry: './src/index.js', // Entry point for your JS files
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML file
      filename: 'index.html', // Output HTML file name
    }),
  ],
};

