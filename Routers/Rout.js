const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello ,Wellcome to router home page");
});

require("../db/MongoConnet");
const User = require("../moduls/userSchema");
//-----------async await---------
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "pls fill the field properly" });
  } else {
    try {
      const userExist = await User.findOne({ email: email });

      if (userExist) {
        return res.status(422).json({ error: "Email allready exist" });
      } else {
        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });
        const userRegister = await user.save();
        if (userRegister) {
          res.status(201).json({ message: "User registered successfuly" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  //-----------promises---------
  // router.post("/register", (req, res) => {
  //   const { name, email, phone, work, password, cpassword } = req.body;

  //   if (!name || !email || !phone || !work || !password || !cpassword) {
  //     return res.status(422).json({ error: "pls fill the field properly" });
  //   }
  //   User.findOne({ email: email })
  //     .then((userExist) => {
  //       if (userExist) {
  //         return res.status(422).json({ error: "Email allready exist" });
  //       }
  //       const user = new User({ name, email, phone, work, password, cpassword });
  //       user
  //         .save()
  //         .then(() => {
  //           res.status(201).json({ message: "User registered successfuly" });
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
});

module.exports = router;
