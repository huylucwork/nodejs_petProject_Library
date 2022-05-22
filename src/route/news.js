const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// --------------./news/:slug-----------

router.get('/:slug', newsController.show); //slug != ''
router.get('/', newsController.index); //slug = ''


module.exports = router;