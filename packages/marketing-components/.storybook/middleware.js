const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '/',
    createProxyMiddleware('/gateway', {
      target: 'https://trwi.se',
      changeOrigin: true,
    }),
  );
};