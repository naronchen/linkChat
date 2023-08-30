const express = require('express');
const redirectController = require('../controllers/redirectController');
const router = express.Router();

router.post('/', redirectController.redirect);

module.exports = router;
