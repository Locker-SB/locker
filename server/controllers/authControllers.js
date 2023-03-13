const User = require('../models/User');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');

const register = (req, res) => {
    res.send('register');
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
