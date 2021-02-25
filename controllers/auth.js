const User = require("../models/user") 

exports.signout = (req,res)=>{
    res.json({
        message:"user signed out"
    })
}


exports.signup = (req,res)=>{
    const user = new User(req.body)
    user.save((err,user)=>{
        if(err){ return res.status(400).json({
            err : "Not able to save user in DB"
        })}
        res.json(user)
    })
}

exports.signin = (req,res)=>{
    res.json({
        message:"user signed in"
    })
}