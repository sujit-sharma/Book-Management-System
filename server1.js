const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Routes = require('./routes/route1');



let Book = require('./model/book');

const app = express();

app.use(bodyParser.json());

app.use(Routes);


mongoose.connect('mongodb://localhost/sujit');
let db = mongoose.connection;

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3001,() => console.log("server running at 3001"));
})