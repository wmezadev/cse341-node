const router = require('express').Router();

router.use('/', require('./home'));
router.use('/contacts', require('./contacts'));

module.exports = router;
