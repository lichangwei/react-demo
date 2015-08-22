module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/main.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'jsx-loader' },
    ]
  }
};