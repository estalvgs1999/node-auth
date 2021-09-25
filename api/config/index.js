require('dotenv').config();

const config = {
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    port: process.env.PORT || 8080,
    cors: {
        origin: ""
    }
};

module.exports = {config: config };
