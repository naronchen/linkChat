const express = require('express');
const aiController = require('../controllers/aiController');
const router = express.Router();

router.post('/', aiController.redirect);

module.exports = router;
