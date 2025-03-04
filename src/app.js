const path = require("node:path");
const express = require('express');
const app = express();

const {indexRouter} = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const messageRouter = require('./routes/messageRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/message', messageRouter);


const PORT = 5000;
app.listen(PORT, () => console.log(`Now tuning in and listening to port ${PORT}!`));