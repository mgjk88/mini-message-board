const db = require('../db/queries');

async function getIndex(req, res){
    const messages = await db.getMessages();
    res.render('index', { messages: messages});
}

module.exports = {getIndex};