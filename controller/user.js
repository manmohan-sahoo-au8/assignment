const userModel = require("../model/user")

module.exports = {
  create:function(req,res,next) {
    userModel.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    },(err,result) => {
      if(err) next(err) // throw(err)
      else
      res.json({status:"Success",message:"user added successfully",data:null})
    })
  }
}