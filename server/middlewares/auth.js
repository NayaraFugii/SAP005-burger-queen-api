const { verifyToken } = require('../utils/jwt.js')

const authToken = function(req, res, next) {
    const auth = req.headers.authorization
  
    if(!auth){
        return res.status(401).json({ message: 'Unauthorized: Missing \'Authorization\' header. 🔐' })
    }
  
    const { decoded, valid } = verifyToken(auth);
  
    if (!valid) {
      return res.status(401).json({ message: 'Unauthorized: Invalid or expired token.' });
    }

    //DO SOMETHING WITH DECODED
  
    next()
};

module.exports = {
    authToken
}