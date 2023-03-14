const User = require('../models/User');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const user = await User.create(req.body);
    const userPayload = {
        name: user.name,
        id: user._id,
        email: user.email,
    };

    // create token
    const token = jwt.sign(userPayload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });

    // add to cookies
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        signed: true,
    });

    res.status(StatusCodes.CREATED).json({ user: userPayload });
};

const login = (req, res) => {
    res.send('login');
};

const logout = (req, res) => {
    res.send('logout');
};

module.exports = {
    register,
    login,
    logout,
};
