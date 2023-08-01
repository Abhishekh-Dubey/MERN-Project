const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//----------------- DataBase mongoose Schema------------//
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// --------bcrypt.hash for the secure the password-------//
UserSchema.pre("save", async function (next) {
  // console.log("hi from inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// ------------generating Token------------------//
UserSchema.methods.generateAuthToken = async function () {
  try {
    let tokenJwt = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenJwt });
    await this.save();
    return tokenJwt;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
