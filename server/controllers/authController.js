const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {createTokenUser, attackCookiesToResponse, createJWT} = require('../utils');
const CustomError = require('../errors');


const register = async (req, res) => {
    // delet all user
    // const user = await User.deleteMany({});
    // res.status(StatusCodes.OK).json({user});
    
    const {name, email, password} = req.body;
    // valid email
    const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
    const isEmailMatch = email.match(emailRegex);
    if(!isEmailMatch){
        throw new CustomError.BadRequestError("Email plovided not valid");
    }
    // first registerd user is an admin
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin":"user";
    const user = await User.create({name, email, password, role});
    const tokenUser = createTokenUser(user);
    attackCookiesToResponse({res, user:tokenUser});
    res.status(StatusCodes.OK).json({tokenUser});
}
const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        throw new CustomError.BadRequestError('Please provide email and password');
    }
    const user = await User.findOne({email});
    if(!user){
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    if(!user.isActive){
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    if(user.googleId || user.facebookId){
        throw new CustomError.BadRequestError("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const tokenUser = createTokenUser(user);
    attackCookiesToResponse({res, user:tokenUser});
    res.status(StatusCodes.OK).json({user:tokenUser});
}
const googleLogin = (req, res) => {
    if(req.user==="error"){
        res.cookie('wsbToken', 'logout', {
            httpOnly: true,
            expires: new Date(Date.now())
        });
        res.redirect(`${process.env.DOMAIN_FRONT_END}/signin`);
    }else{
        // const tokenUser = createTokenUser(req.user);
        // attackCookiesToResponse({res, user:tokenUser});
        // res.redirect(`${process.env.DOMAIN_FRONT_END}`)

        const tokenUser = createTokenUser(req.user);
        const token = createJWT({payload: tokenUser});
        res.redirect(`${process.env.DOMAIN_FRONT_END}/send-token?token=${token}`);
    }
}
const logout = async (req, res) => {
    res.cookie('wsbToken', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.status(StatusCodes.OK).json({msg: 'User logged out!'});
}

module.exports = {
    register,
    login,
    logout,
    googleLogin
}