const db = require('../models')
const Products = db.products


checkDuplicateList = (req,res,next) =>{
    Products.findOne({
        userID: req.userId
    }).exec((err, productList)=>{
        if(err){
            res.status(500).send({message: err})
            return;
        }
        if(productList){
            res.status(400).send({message: `Failed! User already created list by name: ${productList.listName}`})
            return;
        }
        next()
    })
}

checkUserListExists = (req,res,next)=>{
    Products.countDocuments({userID: req.userId}, function (err, count){ 
        if(err){
            res.status(500).send({message: err})
            return;
        }
        if(count<1){
            res.status(400).send({message: `Error! User list does not exists!`})
            return;
        }
        next();
    }); 
}

const verifyProducts = {
    checkDuplicateList,
    checkUserListExists
}

module.exports = verifyProducts;