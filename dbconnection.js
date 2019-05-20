const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sujit', {useNewUrlParser: true});

module.exports = mongoose.connection;