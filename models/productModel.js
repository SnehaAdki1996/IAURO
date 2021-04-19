var mongoose = require('mongoose')

const productModel = mongoose.Schema({
    productId  : {type : String , required : true},
    userId  : {type : String , required : true},
    productName : {type : String},
    price : {type : String}
})

module.exports = mongoose.model("productCollection" , productModel)