const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// --------------./news/:slug-----------

router.get('/search', siteController.search); //slug = '/search'
router.get('/', siteController.home); //slug = ''

module.exports = router;