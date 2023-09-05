//@NOTE encapsulate to make it modifiable as a global variable
let redirectStatus = { isRedirecting: false };

function redirectSyncMiddleware(req, res, next){

    if (redirectStatus.isRedirecting){
        return res.status(503).send("Server is busy. Please try again later.")
    } else {
        redirectStatus.isRedirecting = true;
        next()
    }
}

module.exports = {redirectSyncMiddleware, redirectStatus}