const jwt = require('jsonwebtoken');

const createJWT = (userPayload) => {
    const token = jwt.sign(userPayload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, userPayload }) => {
    // create token
    const token = createJWT(userPayload);

    // add to cookies
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        signed: true,
    });
};

module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
};
