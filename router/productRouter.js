var express = require('express')
var router = express.Router()
const productController = require('../controller/productController')

router.get('/getProductData',productController.getData)
router.post('/postProductData',productController.postData)
router.delete('/deleteProductData',productController.deleteData)
router.put('/updateProductData',productController.updateData)


module.exports = router