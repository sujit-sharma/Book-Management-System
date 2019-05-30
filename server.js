const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const pug = require('pug');
const path = require('path');

const db = require('./dbconnection');
const bookRoutes = require('./routes/bookRoute');

const app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bookRoutes);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));

// Check for Db errors
db.on('error', (err) => console.log(err))
// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3001,() => console.log("server running at 3001"));
});


