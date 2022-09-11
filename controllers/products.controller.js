
const db = require('../models')
const Products = db.products

exports.getAllProducts = (req, res)=>{
    Products.findOne({userID: req.userId},(err, products)=>{
        if(err){
            res.status(500).send({ message: err })
            return;
        }
        res.status(200).send(products)
    })
}

exports.createProductsList = (req, res) => {
    console.log(req.body.listName)
    console.log(req.body.products)
    console.log(req.body)
    
    const productList = new Products({
        listName: req.body.listName,
        userID: req.userId,
        products: req.body.products    
    })
    productList.save((err)=>{
        if (err) {
            res.status(500).send({ message: err })
        }
    
        res.send({ message: "Products list successfully created" })
    })
    
}

exports.deleteProductsList = (req, res) =>{
    Products.deleteOne({userID: req.userId}, (err)=>{
        if(err){
            res.status(500).send({ message: err })
            return;
        }
    })
    res.send({ message: "Products list successfully deleted" })
}

exports.updateProductList = (req, res)=>{
    console.log(req.body.listName)
    if(req.body.listName){
        Products.updateOne({userID: req.userId},{$set: {listName: req.body.listName}}, (err, list)=>{
            if(err){
                res.status(500).send({ message: err })
                return;
            }
        })
    }
    if(req.body.products){
        
    
        for(var index = 0; index<req.body.products.length; index++){
            console.log(req.body.products[index].name)


            Products.bulkWrite([{
                updateOne: {
                    "filter": { userID: req.userId, "products.name": req.body.products[index].name },
                    "update": { $set: { "products.$.quantity": req.body.products[index].quantity } } // Will update rate
                }
            },
            {
                updateOne: {
                    "filter": { userID: req.userId, "products.name": { $ne: req.body.products[index].name } },
                    "update": { $push: { "products": { "name": req.body.products[index].name, "quantity": req.body.products[index].quantity } } } // will push new object to rating
                }
            }],(err, list)=>{
                if(err){
                    res.status(500).send({ message: err })
                    return;
                }
            })
        }
    }
    res.status(200).send({message:"Product lists successfully created"})
}

exports.deleteProductsItem = (req, res)=>{
    var itemName = req.params.name

    Products.updateOne(
        {userID: req.userId},
        {$pull: {products: {name: itemName}}},
        (err, result)=>{
            if(err){
                res.status(500).send({message: err})
                return;
            }
            if(result.modifiedCount < 1){
                res.status(401).send({message: `Error: Item no found by name: ${itemName}`})
                return
            }
            res.send({message: "Item successfully deleted", products: result})
        }
    )
}