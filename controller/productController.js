const productModel = require('../models/productModel')
const userController = require ('../controller/useController')

exports.postData = async (req,res) =>{
    try{
        var data = await userController.findByID(req.body._id)
        if(data){
            const prdModel = new productModel(req.body)

            prdModel.save()
            .then(result => {
                res.status(201).json({Data : result})
            })
        }

    }
    catch (error){
        res.status(500).json({Error : error} )
        }
}

exports.getData = (req,res) => {
    productModel.find()
    .then(result => {
        res.status(200).json({Data : result})
    })
    .catch(error => {
        res.status(500).json({Error : error})
    }) 
}

exports.deleteData = (req,res) =>{
    productModel.deleteOne({_id : res.query._id})
    .then(result => {
        res.status(200).json({Data : result})
    })
    .catch(error => {
        res.status(500).json({Error : error})
    })
}

exports.updateData = (req,res) => {
    productModel.updateOne({_id : req.query._id})
    .then(result => {
        res.status(200).json({Data : result})
    })
    .catch(error => {
        res.status(500).json({Error : error})
    })
}