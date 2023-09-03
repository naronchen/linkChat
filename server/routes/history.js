const express = require('express');
const historyController = require('../controllers/historyController.js');
const router = express.Router();

router.get('/', historyController.history);

module.exports = router;
