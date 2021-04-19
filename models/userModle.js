var mongoose = require('mongoose')

const userModel = mongoose.Schema({
    userName  : {type : String , required : true},
    password  : {type : String , required : true},
    phoneNumber : {type : Number}
})

module.exports = mongoose.model("userCollection" , userModel)