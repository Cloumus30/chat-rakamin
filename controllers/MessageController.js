const { User, Message, MessageRecipient } = require('../models/index');
const {Op} = require('sequelize');

const sendMessage = async (req,res)=>{
    const body = req.body;
    const recipientId = body.recipient_id || null;
    const groupId = body.group_id;
    if(recipientId){
        const recipient = await User.findOne({
            where:{
                id: recipientId,
            }
        })
    
        if(!recipient){
            return res.status(400).json({
                error: 'Recipient Not Found'
            })
        }
    }

    const message = await Message.create({
        sender_id: req.user.id,
        body: body.message,
    });

    const recipientMessage = await MessageRecipient.create({
        recipient_id: recipientId,
        recipient_group_id: groupId,
        is_read: false,
        message_id: message.id
    });

    return res.status(200).json({
        message: 'Success Create Message',
    })
}

const listMessageByRecipient = async (req, res) =>{
    const body = req.body;
    const recipientId = body.recipient_id;
    
    
    const messages = await Message.findAll({
        where:{
            sender_id: req.user.id,
        },
        include: {
            as: 'recipientMessage',
            model:MessageRecipient,
            where:{
                recipient_id: {
                    [Op.eq] : recipientId
                }
            },
            include:{
                as:'recipient',
                model: User,
            }
        }
    });

    return res.status(200).json(messages);
}

module.exports = {sendMessage, listMessageByRecipient}