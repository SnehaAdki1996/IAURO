const userModel = require('../models/userModle')

exports.getUser = (req, res) => {
    userModel.find()
    .then( result => {
        res.status(200).json({Data : result})
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
}

exports.postData = (req,res) => {
    const userData = new userModel(req.body)

    userData.save()
    .then( result => {
        res.status(201).json({data : result})
    })
    .catch( err => {
        res.status(500).json({Error : err})
    })

}

exports.deleteData = (req,res) => {
    userModel.deleteOne({_id:req.query._id})
    .then(result =>{
        res.status(200).json({data : result})
    })
    .catch( err => {
        res.status(500).json({Error : err})
    })

}

exports.updateUser = (req,res)=>{
    userModel.updateOne({_id :req.query._id},{phoneNumber : req.body.phoneNumber})
    .then(result =>{
        res.status(200).json({data : result})
    })
    .catch( err => {
        res.status(500).json({Error : err})
    })
}

exports.findByID = (id) => {
   return  userModel.findById({_id : id})
   
}