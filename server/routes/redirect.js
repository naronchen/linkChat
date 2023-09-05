const express = require('express');
const redirectController = require('../controllers/redirectController');
const redirectMiddleware = require('../middlewares/redirectMiddleware')
const router = express.Router();

router.use(redirectMiddleware.redirectSyncMiddleware)

router.post('/', async (req, res) => {
    await redirectController.redirect(req, res);
    redirectMiddleware.redirectStatus.isRedirecting = false
})

module.exports = router;
