const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb+srv://manmohan:manmohan@cluster0.js1qu.mongodb.net/mounty?retryWrites=true&w=majority"
const port = process.env.PORT || 5500

const app = express()

//connect to database
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(()=>{
  console.log("Database connected")
}).catch((error) => {
  console.log(error);
})


// health check url
app.get('/',(req,res)=> {
  res.send("API is running")
})

//sever listing to the port
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
