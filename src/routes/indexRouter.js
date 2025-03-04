const { Router } = require('express');
const indexRouter = Router();
let messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
indexRouter.get('/', (req, res) => {
    res.render('../views/index', {title: 'Mini Messageboard', messages: messages});
})


module.exports = {indexRouter, messages};