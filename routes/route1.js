const express = require('express');

const router = express.Router();
const Book = require('../model/book');

router.get('/books',(req,res) => {
    Book.find(function(err, bookList) {
        if(err) res.send({error: err.message})
        console.log(bookList, '>>>>')
        res.send(bookList)
    })
});

router.post('/books',(req,res) => {
    const data = req.body;
    Book.create(data, (err,createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })
   
});

module.exports = router;