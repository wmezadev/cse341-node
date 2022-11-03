const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('William Meza')
})

module.exports = routes;