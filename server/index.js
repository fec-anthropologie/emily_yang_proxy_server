const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const morgan = require('morgan');
const path = require('path'); 
const bodyParser = require('body-parser');
const router = require('./router.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/', router)

app.use(
  '/api/search',
  proxy({ target: 'http://localhost:3001', changeOrigin: true })
);
app.use(
  '/api/product',
  proxy({ target: 'http://localhost:3002', changeOrigin: true })
);
app.use(
  '/api/review',
  proxy({ target: 'http://localhost:3003', changeOrigin: true })
);

app.listen(3000);

// const http = require('http');
// const httpProxy = require('http-proxy');
// //
// // Create a proxy server with latency
// //
// const proxy = httpProxy.createProxyServer();

// const morgan = require('morgan');
// const path = require('path'); 
// const bodyParser = require('body-parser');
// const router = require('./router.js')

// proxy.use(morgan('dev'));
// proxy.use(bodyParser.urlencoded({ extended: true }));
// proxy.use(bodyParser.json());
// proxy.use('/', express.static(path.join(__dirname, '../client/dist')));
// proxy.use('/', router)

// http.createServer(function (req, res) {
//   proxy.web(req, res, {
//     target: 'http://localhost:3000'
//   });
//   proxy.web(req, res, {
//     target: 'http://localhost:3003'
//   });
//   proxy.web(req, res, {
//     target: 'http://localhost:4000'
//   });
// }).listen(8008);


