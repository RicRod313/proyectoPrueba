require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const accessMethods = {}


accessMethods.loginAccess = async (req, res) => {
    const { username, password } = req.body;
    try {

        const user = await User.findOne({userName: username});
        if(!user){
            return res.status(200).json({code: 1, message: "Usuario no existe", auth: false});
        }

        const autenticate = user.confirmPassword(password);
        if(!autenticate){
           return  res.status(200).json({code: 2, message: "Contraseña incorrecta", auth: false});
        }

        const token = jwt.sign(user._id.toString(), process.env.SECURE_KEY);
        if(!token){
            return  res.status(200).json({code: 3, message: "Error en autenticación, prueba de nuevo", auth: false});
        }

        return res.status(200).json({code: 0, message: "OK", auth: true, user: user, token: token});

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


accessMethods.signupAccess = async (req, res) => {
    const { name, lastName, userName, password, email } = req.body;
    const signedUpUser = new User({
        name: name,
        lastName: lastName,
        userName: userName,
        password: password,
        email: email
    });
    signedUpUser.password = await signedUpUser.encryptPassword(password);

    signedUpUser.save()
    .then(data => {
        return res.status(200).json({code: 0, message: "OK", user: data});
    })
    .catch(error => {
        return res.status(500).json(error);
    });
}

module.exports = accessMethods;