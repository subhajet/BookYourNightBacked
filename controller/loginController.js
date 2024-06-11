const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model")

const loginHandler = async (req,res) => {
    try{
        const user = await User.findOne({number: req.body.number})
        !user && res.status(401).json({message:"Invalid Mobile Number"})

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(cryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({message: "Incorrect password"})
        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({username:user.username}, process.env.ACCESS_TOKEN )


        
        res.json({...rest, accessToken});

    }catch(err){
        console.log(err);
    }
}

module.exports = loginHandler