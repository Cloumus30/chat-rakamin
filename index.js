require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT_APP || 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Middleware
const authMiddleware = require('./middleware/auth');

// Controller
const authController = require('./controllers/AuthController');

app.get('/',(req,res)=>{
    return res.status(200).json({
        code : 200,
        message: "Welcome to Cloudias' Chat App"
    });
})

app.post('/login',authController.login)

app.use(authMiddleware.LoggedIn)




app.listen(port, ()=>{
    console.log(`Listening Into Port:${port}`);
})