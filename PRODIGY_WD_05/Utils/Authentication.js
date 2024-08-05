const jwt = require('jsonwebtoken')

const secret = 'Het@45'

function validateToken(token){
    const payload = jwt.verify(token, secret)
    return payload
}

module.exports = validateToken