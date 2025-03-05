function getMessage(req,res) {
    try {
        res.render('message', {text: req.query.text, username: req.query.username, date: req.query.date});        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getMessage};