/*  eslint-disable no-console  */
/*  eslint-disable global-require  */

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api = require('./api');

const PORT = process.env.PORT || 3000;
const build = process.env.NODE_ENV || 'development';
console.log(build);
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


if (build === 'development') {
  const webpack = require('webpack');
  const hotMiddleware = require('webpack-hot-middleware');
  const devMiddleware = require('webpack-dev-middleware');
  const config = require('../webpack.config');

  const compiler = webpack(config);
  app.use(hotMiddleware(compiler));
  app.use(devMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: config.output.publicPath,
    })
  );
}

app.use('/api', api);
app.get('*', (req, res) => {
  const indexFile = (build === 'development') ?
    path.join(__dirname, '../src/index.html')
    : path.join(__dirname, './index.html');
  console.log(indexFile);
  res.sendFile(indexFile);
});

app.listen(PORT, (err) => {
  console.log(err || `server started port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wreadme', (err) => {
  console.log(err || 'Mongoose connected!');
});
