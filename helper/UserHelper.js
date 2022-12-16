const { response } = require('express');
const {User} = require('../models/index');
/**
 * Check If user exists
 * @param {Number} userId
 */
const checkUserById = async(userId) =>{
    const data = await User.findOne({
        where:{
            id:userId,
        }
    });

    if(!data){
        response.status(400).json({
            message: "User Not Found",
        })
    }
}