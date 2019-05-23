const express = require('express');

const router = express.Router();
const Book = require('../model/book');

router.get('/books',(req,res) => {
    Book.find(function(err, bookList) {
        if(err) res.send({error: err.message})
        title="Booklists";
        res.render('book', {title:title,books:bookList});
        //res.send(bookList)
    })
});

router.post('/books',(req,res) => {
    const data = req.body;
    Book.create(data, (err, createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })

   
});


router.get('/frompug', (req, res) => {
    title="My fisrt page with pug";
    books = ['Crypto', 'DSA','TOC','NSA'];
    body="Hello world!!"
    res.render('book', {title: title,body:body,books:books});
})

/// Addding new things


//  router.put('/books/edit/:id', (req,res) => {
//  const id = req.params.id;
//  const query = {_id: userId};
//  const data = req.body;
 

//     })

// router.get('/', (req,res) => {
//     res.send('<h1> Hello mr Sujit </h1>');
//     res.end();
// })

module.exports = router;