const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String, 
  mobile: String, 
  email: String, 
  address: { 
    street: String, 
    locality: String, 
    city: String, 
    state: String, 
    pincode: String, 
    coordinatesType: String, 
    coordinates: [Number] 
  }
})

module.exports = mongoose.model("User",UserSchema)