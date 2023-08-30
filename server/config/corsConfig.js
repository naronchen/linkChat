
// Allow only certain origins, adjust as needed
const corsOptions = {
    origin: ['http://localhost:5000', 'http://localhost:5173', 'http://localhost:9000'],  // Allowed origins
};

module.exports = corsOptions;
