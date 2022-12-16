require('dotenv').config();
const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const coba = (req, res)=>{
    return res.status(200).json({
        code: 200,
        message: 'Success Try Controller'
    });
}

const login = async (req,res) =>{
    const body = req.body;

    const user = await User.scope('withPassword').findOne({
        where:{
            username: body.username
        }
    });
    if(!user){
        return res.status(400).json({
            error: "User Not Found"
        });
    }
    const credential = bcrypt.compareSync(body.password, user.password)
    if(!credential){
        return res.status(400).json({
            error: "User Or Password No Match"
        });
    }
    const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'1h'})

    return res.status(200).json({
        code: 200,
        access_token: token,
        message: 'Success Login'
    });
    
}


module.exports = {coba, login}