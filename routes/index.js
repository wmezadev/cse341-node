const router = require('express').Router();

router.use('/', require('./home'));
router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./swagger'));

module.exports = router;
