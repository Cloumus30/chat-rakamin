require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT_APP || 3000;

app.get('/',(req,res)=>{
    return res.status(200).json({
        code : 200,
        message : 'Tes Hello'
    })
})


app.listen(port, ()=>{
    console.log(`Listening Into Port:${port}`);
})