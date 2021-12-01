const express = require('express');
const router = express.Router();
const { signupAccess, loginAccess } = require('../controller/accessController');

//@desc POST login access
//@route POST /api/access/login
//@access Public
router.post('/login', loginAccess);

//@desc POST Signup account
//@route POST /api/access/signup
//@access Public
router.post('/signup', signupAccess);

module.exports = router;