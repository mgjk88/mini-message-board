const { Router } = require('express');
const {messages} = require('./indexRouter');
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
  res.render('../views/form');  
})

newMessageRouter.post('/', (req, res) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date()});
    res.redirect("/");
})

module.exports = newMessageRouter;