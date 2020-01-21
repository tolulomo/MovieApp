

if(process.env.NODE_ENV === 'production'){
    // run production keys
    module.exports = {
        apiKey: process.env.API_KEY || '9084eae9f770e006ebcba95dbd474e28'
    }
} else {
    const key = require('../../../../apiKey');
    // run local keys
    module.exports = {
        apiKey: key.key
    }
}