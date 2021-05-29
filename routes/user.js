const express = reuire("express")
const router = express.Router()
const userController = require("../controller/user")

router.post("/",userController.create)
router.get("/",userController.getAll)
router.put("/:",userController.updateById)
router.delete("/:",userController.deleteById)
