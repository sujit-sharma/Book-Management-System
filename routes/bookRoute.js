const express = require('express');

const router = express.Router();
const Book = require('../model/book');

router.get('/books',(req,res) => {
    Book.find(function(err, bookList) {
        if(err) res.send({error: err.message})
        title="Booklists";
        res.render('book', {title:title,books:bookList});
        // res.send(bookList)
    })
});

router.post('/books',(req,res) => {
    const data = req.body;
    Book.create(data, (err, createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })
});

router.delete('/books/:id', function (req, res) {
    const bookId = req.params.id;
    const query = {_id: bookId};
    Book.deleteOne(query)
        .then((data) => {
            console.log(data)
            res.statusCode = 200;
            
            res.redirect('/books/');

    
        })
        .catch((err) => {
            res.statusCode = 400;
            res.redirect('/books');
        })
});

router.put('/books/:id',function (req, res){
    const bookId = req.params.id;
    const query = {_id: bookId};
    const data = req.body;
    Book.update(query, {$set:data})
        .then(()=> {
            res.redirect('/books');
        })
        .catch((err)=> {
            res.statusCode = 400;
            res.end(err.message);
        });

});

router.get('/frompug', (req, res) => {
    title="My fisrt page with pug";
    books = ['Crypto', 'DSA','TOC','NSA'];
    body="Hello world!!"
    res.render('book', {title: title,body:body,books:books});
})

module.exports = router;