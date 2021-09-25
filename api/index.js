const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { config } = require('./config');


const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/auth/token', (req, res) => {
    const { email, username, name } = req.body;
    const token = jwt.sign(
        {
            sub: username,
            email,
            name 
        },
        config.authJwtSecret
    );
    res.json({ access_token: token });
});


app.get('/api/auth/verify', (req, res, next) => {
    const { access_token } = req.query;

    try {
        const decoded = jwt.verify(access_token, config.authJwtSecret);
        res.json({ 
            msg: "the access token is valid", 
            username: decoded.sub 
        });
    } catch (err) {
        next(err);
    }
});




const port = config.port;
const server = app.listen(port, () => {
    console.log(`Server is listening 🚀 at http://localhost:${port} ...`)
});