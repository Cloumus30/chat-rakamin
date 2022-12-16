
const coba = (req, res)=>{
    return res.status(200).json({
        code: 200,
        message: 'Success Try Controller'
    });
}

const login = (req,res) =>{
    return res.status(200).json({
        code: 200,
        message: 'Success Login'
    });
}

module.exports = {coba}