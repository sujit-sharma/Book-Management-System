const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sujit');

module.exports = mongoose.connection;