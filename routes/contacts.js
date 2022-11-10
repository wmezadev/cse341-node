const router = require('express').Router();
const ContactController = require('../controllers/contacts');

router.get('/', ContactController.index);
router.get('/:id', ContactController.show);
router.post('/', ContactController.store);
router.put('/:id', ContactController.update);

module.exports = router;
