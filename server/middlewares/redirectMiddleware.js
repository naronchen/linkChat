
let isRedirecting  = false

function redirectSyncMiddleware(req, res, next){
    if (isRedirecting){
        return res.status(503).send("Server is busy. Please try again later.")
    } else {
        isRedirecting = true
        next()
    }
}

module.exports = {redirectSyncMiddleware}