const jwt = require('jsonwebtoken');

const generateToken = (payload) => (
    jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "7d" })
);

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        return { valid: true, decoded };
    } catch (err) {
        return { valid: false, decoded: null };
    }
};

module.exports = { 
    generateToken,
    verifyToken
}