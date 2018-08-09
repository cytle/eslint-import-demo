const path = require('path');

module.exports =  {
  entry: {
    app: path.resolve(__dirname, 'src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'utils'),
    },
    mainFields: ['browser', 'main'],
  },
};
