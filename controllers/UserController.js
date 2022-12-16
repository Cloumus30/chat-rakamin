const { User } = require('../models/index');
const {Op} = require('sequelize');

const listUser = async (req,res)=>{
    const userId = req.user.id;
    const data = await User.findAll({
        where:{
            id:{
                [Op.ne] : userId
            }
            
        }
    });

    return res.status(200).json({
        message: 'success Get',
        data: data,
    })
}

module.exports={listUser}