const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();
const config = require('../webpack.config');
const compiler = webpack(config);

app.use(historyApiFallback());

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: true,
      errors: true,
      errorDetails: false,
      warnings: true,
      publicPath: false
    }
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('App is running on port 3000!\n');
});