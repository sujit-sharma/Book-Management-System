const mongoose = require('mongoose');

// Book Schemas

let bookSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    content:{
        type: String,
        required: true
    }

})

let Book = module.exports = mongoose.model('Book', bookSchema);