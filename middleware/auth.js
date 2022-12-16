require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

const LoggedIn = async (req, res, next)=> {
    
    const authorizationHead = req.get('authorization');
    if(!authorizationHead){
        return res.status(400).json({
            error: 'Unauthorized'
        });    
    }
    const token = authorizationHead.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    
    await jwt.verify(token,secret, async (err,decode)=>{
        if(err){
            return res.status(400).json({
                'error':'Unauthorized',
                'message': err.message,
            });
        }

        userId = decode.userId;
        const user = await User.findOne({
            where:{
                id: userId,
            }
        })
        if(!user){
            return res.status(400).json({
                error: 'Unauthorized'
            }); 
        }

        req.user = user;
    })

    next();
}

module.exports = {LoggedIn}