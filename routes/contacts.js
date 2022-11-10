const router = require('express').Router();
const ContactController = require('../controllers/contacts');

router.get('/', ContactController.index);
router.get('/:id', ContactController.show);

module.exports = router;
