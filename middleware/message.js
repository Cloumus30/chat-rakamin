
const checkMessage = async (req,res,next) =>{
    const body = req.body;
    
    if(!body.message){
        return res.status(200).json({
            message: 'Message Body Empty, Not Created Message'
        })
    }

    next();
}

module.exports = {checkMessage};