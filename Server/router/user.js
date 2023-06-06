const router = require("express").Router();
const { findOne } = require("../models/Pin");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// post request to server
router.post("/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user and add it to the database
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const saveuser = await newUser.save();
    res.status(200).json(saveuser._id);
  } catch (err) {
    
    res.status(404).json(err);
  }
});
// login user account
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json(err);
    } else {
      const validation = await bcrypt.compare(req.body.password, user.password);
      if (!validation) {
        res.status(404).json(err);
        console.log("validation failed");
      } else {
        res.status(200).json(user);
        console.log("validation successful");
      }
    }
  } catch (err) {
    console.log("error having login validation failed");
  }
});
module.exports = router;
