const mongoose = require("mongoose")


const GeoSchema = new mongoose.Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
})

const UserSchema = new mongoose.Schema({
  name: String, 
  mobile: {
    type:Number,
    unique:true
  }, 
  email: String, 
  address: { 
    street: String, 
    locality: String, 
    city: String, 
    state: String, 
    pincode: Number, 
  },
    geometry:GeoSchema
},
  {
    timestamps: true
  })

module.exports = mongoose.model("User",UserSchema)