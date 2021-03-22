const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: {
//     P: './components/P.entry.js',
//     Q: './components/Q.entry.js',
//     R: './components/R.entry.js',
//     S: './components/S.entry.js',
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   optimization: {
//     splitChunks: {
//       chunks: 'all'
//     }
//   }
// };

module.exports = {
  mode: 'development',
  entry: './storiesEntry.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};