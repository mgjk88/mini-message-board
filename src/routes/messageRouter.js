const messageController = require('../controllers/messageController');
const {Router} = require('express');
const messageRouter = Router();

messageRouter.get('/', messageController.getMessage);

module.exports = messageRouter;