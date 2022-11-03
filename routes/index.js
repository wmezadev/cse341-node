const routes = require('express').Router();
const controllers = require('../controllers/');

routes.get('/', controllers.HomeController)

module.exports = routes;