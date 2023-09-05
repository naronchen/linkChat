const express = require('express');
const redirectController = require('../controllers/redirectController');
const redirectMiddleware = require('../middlewares/redirectMiddleware')
const router = express.Router();

router.use(redirectMiddleware.redirectSyncMiddleware)

router.post('/', async (req, res) => {
    try {
        await redirectController.redirect();

        isRedirecting = false;

        res.status(200).json({error: "Redirect finished."})
    } catch (error) {
        isRedirecting = false;
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/', redirectController.redirect);

module.exports = router;
