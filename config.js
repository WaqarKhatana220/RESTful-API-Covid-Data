// configuration for secret key

const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
module.exports = secretKey