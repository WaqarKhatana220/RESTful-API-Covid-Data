const jwt = require('jsonwebtoken');
var secretKey = require('../config.js')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token){
        res.status(401);
        res.send('Unauthorized');
        return
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err){
            res.status(403);
            res.send("Invalid token");
            return
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
