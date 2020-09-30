const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevConfig = require('./webpack.dev');

const compiled = webpack(webpackDevConfig);

const express = require('express');
const app = express();

app.use(webpackDevMiddleware(compiled, {}));

// hot reload enabled but still need reload manually
app.listen(3000);
