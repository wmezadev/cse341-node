const router = require('express').Router();
const HomeController = require('../controllers/home');

router.get('/', HomeController.index);

module.exports = router;
