const config = require('../config/auth.config')
const db = require('../models')
var bcrypt = require("bcryptjs")
const User = db.user;

exports.changePassword = (req, res) => {
    User.updateOne({_id: req.userId},{$set: {password: bcrypt.hashSync(req.body.password, 8)}},
    (err)=>{
        if(err){
            res.status(500).send({ message: err })
            return;
        }
        res.status(200).send({message:"Password successfuly changed!"})
    })
}