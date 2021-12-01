const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(token === undefined || token === null || token === "") {
        return res.status(200).json({code: 1, message: "No tiene accesso a esta informacion", auth: false});
    }

    const auth = jwt.verify(token, process.env.SECURE_KEY);
    if(!auth) {
        return res.status(200).json({code: 1, message: "No tiene accesso a esta informacion", auth: false});
    }

    req.userID = auth;
    next();
}

module.exports = verifyToken;