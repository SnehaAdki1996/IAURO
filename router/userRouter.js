var express = require('express')
var router = express.Router()
const userController = require('../controller/useController')

router.get('/getUserData',userController.getUser)
router.post('/postUserData',userController.postData)
router.delete('/deleteUserData',userController.deleteData)
router.put('/updateUserData',userController.updateUser)


module.exports = router