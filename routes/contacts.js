const router = require('express').Router();
const ContactController = require('../controllers/contacts');

router.get('/', ContactController.index);
router.get('/:id', ContactController.show);
router.post('/', ContactController.store);

module.exports = router;
