const jwt = require("jsonwebtoken");
const User = require("../moduls/userSchema");

const authenticate = async (req, res, next) => {
  console, log("middleWare");
  next();
  // const token = req.headers.authorization?.split(" ")[1];

  // try {
  //     const token = req.cookies.jwtoken;
  //     console.log("token-", token);
  //     const verifyToken = jwt.verify(token);
  //
  //     const rootUser = await User.findOne({
  //       _id: verifyToken._id,
  //       "tokens.token": token,
  //     });
  //
  //     if (!rootUser) {
  //       throw new Error("User not Found");
  //     } else {
  //       req.token = token;
  //       req.rootUser = rootUser;
  //       req.userID = rootUser._id;
  //       next();
  //     }
  // } catch (err) {
  //   // Send error as JSON response
  //   res.status(401).json({ error: "Unauthorized: No token provided" });
  //   console.log(err);
  // }
};

module.exports = authenticate;
