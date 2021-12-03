const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {createTokenUser, attackCookiesToResponse} = require('../utils');
const register = async (req, res) => {
    // delet all user
    // const user = await User.deleteMany({});
    // res.status(StatusCodes.OK).json({user});
    
    const {name, email, password} = req.body;
    // first registerd user is an admin
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin":"user";
    const user = await User.create({name, email, password, role});
    const tokenUser = createTokenUser(user);
    attackCookiesToResponse({res, user:tokenUser});
    res.status(StatusCodes.OK).json({tokenUser});
}
const login = async (req, res) => {
    res.send('login');
}
const logout = async (req, res) => {
    res.send('logout');
}

module.exports = {
    register,
    login,
    logout
}