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
        type:Number

    },
    content:{
        type: String
        
    }

})

module.exports = mongoose.model('Book', bookSchema);