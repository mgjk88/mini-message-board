const {Router} = require('express');
const messageRouter = Router();

messageRouter.get('/', (req,res) => {
    res.render('../views/message', {text: req.query.text, user: req.query.user});
});

module.exports = messageRouter;