const key = require('../../../../apiKey');

if(process.env.NODE_ENV === 'production'){
    // run production keys
    module.exports = {
        apiKey: process.env.API_KEY
    }
} else {
    // run local keys
    module.exports = {
        apiKey: key
    }
}