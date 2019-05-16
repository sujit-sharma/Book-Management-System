const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



let Book = require('./model/book');

const app = express();

app.use(bodyParser.json());
app.get('/',(req,res) => {
    Book.find(function(err, bookList) {
        if(err) res.send({error: err.message})
        console.log(bookList, '>>>>')
        res.send(bookList)
    })
});

app.post('/',(req,res) => {
    console.log(req.body);
    const data = req.body;
    Book.create(data, (err,createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })
   
});

mongoose.connect('mongodb://localhost/sujit');
let db = mongoose.connection;

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3001,() => console.log("server running at 3001"));
})