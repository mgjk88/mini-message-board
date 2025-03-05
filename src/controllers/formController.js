const db = require('../db/queries');

function getForm(req, res) {
    res.render('../views/form');  
  };

function postForm(req, res) {
  db.addMessage(req.body.text, req.body.user);
  res.redirect("/");
}

module.exports = {getForm, postForm};