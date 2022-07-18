const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, required:true},
    lastName:{type: String, required:true},
    password:{type: String, required:true},
    image:{type: String, required:true},
    uniqueString: {type: String, required:true},
    verification: {type: Boolean, required:true}
})

const User = mongoose.model('users', userSchema)

module.exports = User