require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT_APP || 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Middleware
const authMiddleware = require('./middleware/auth');
const messageMiddleware = require('./middleware/message');

// Controller
const authController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');

app.get('/',(req,res)=>{
    return res.status(200).json({
        code : 200,
        message: "Welcome to Cloudias' Chat App"
    });
})

app.post('/login',authController.login)

app.use(authMiddleware.LoggedIn)

app.get('/contact',UserController.listUser);
app.post('/send-message',messageMiddleware.checkMessage, MessageController.sendMessage);
app.post('/list-message-recipient',MessageController.listMessageByRecipient);

app.listen(port, ()=>{
    console.log(`Listening Into Port:${port}`);
})