const bodyParser = require('body-parser');
const express = require('express');
const pug = require('pug');
const path = require('path');

const Routes = require('./routes/bookRoute');
const db = require('./dbconnection');

let Book = require('./model/book');

const app = express();

app.use(bodyParser.json());

app.use(Routes);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));


// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3001,() => console.log("server running at 3001"));
});


