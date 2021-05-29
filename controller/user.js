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
  },

  getAll:(req,res,next) => {
    let carModelList = []
    carsModel.find({},(err,carModels) => {
      if(err) {
        next(err)
      } else {
        for(let model of carModels ){
          carModelList.push({
            id:model._id,
            carType:model.carType,
            servicePrice:model.servicePrice,
            image:model.image
          })
        }
        res.json({status:"Success",message:"car model list found",data:{carTypes:carModelList}})
      }
    })
  },

  updateById:(req,res,next) => {
    carsModel.findByIdAndUpdate(req.params.carTypeId,{
      _id:req.body._id,
      carType:req.body.carType,
      name:req.body.name,
      servicePrice:req.body.servicePrice,
      image:req.body.image
    },(err,result) => {
      if(err) next(err)
      res.json({status:"success",message:"data updated successfully"})
    })
  },

  deleteById:(req,res,next) => {
    carsModel.findByIdAndRemove(req.params.carTypeId,(err,result) => {
      if(err) next(err)
      res.json({status:"success",message:"data deleted successfully"})
    })
  }
}