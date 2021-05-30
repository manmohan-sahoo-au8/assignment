const express = require("express")
const router = express.Router()
const User = require("../model/user")

//getUser middleware
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}


//Create One
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    email:req.body.email,
    address:req.body.address
  });
  try {
    const newUser = await user.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get One
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

//Get All
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Put One
router.put("/:id", getUser, async (req, res) => {
  try {
    const updatedUser = await res.user.set(req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete One
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: "User has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router