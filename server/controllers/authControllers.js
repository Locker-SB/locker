const User = require('../models/User');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const { attachCookiesToResponse } = require('../utils');

const register = async (req, res) => {
    const user = await User.create(req.body);
    const userPayload = {
        name: user.name,
        id: user._id,
        email: user.email,
    };
    attachCookiesToResponse({ res, userPayload });
    res.status(StatusCodes.CREATED).json({ user: userPayload });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new CustomError.BadRequestError(
            'Must include email and password'
        );
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
        throw new CustomError.UnauthenticatedError('Invalid password');
    }

    const userPayload = {
        name: user.name,
        id: user._id,
        email: user.email,
    };

    attachCookiesToResponse({ res, userPayload });
    res.status(StatusCodes.CREATED).json({ user: userPayload });
};

const logout = (req, res) => {
    // remove token cookie
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: 'logged out' });
};

module.exports = {
    register,
    login,
    logout,
};
