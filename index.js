const express = require("express");

const dotenv = require("dotenv");
const { connect } = require("mongoose");
const app = express();

// env connection
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
// databaase connection
require("./db/MongoConnet");
// const user = require("./moduls/userSchema");

// router connection
app.use(express.json());
app.use(require("./Routers/Rout"));

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};
// app.get("/", (req, res) => res.send("hello ,Wellcome to home page"));
app.get("/about", middleware, (req, res) =>
  res.send("hello ,Wellcome to about page")
);
app.get("/contect", (req, res) => res.send("hello ,Wellcome to contect page"));
app.get("/singin", (req, res) => res.send("hello ,Wellcome to singin page"));
app.get("/singup", (req, res) => res.send("hello ,Wellcome to singup page"));
// app.get("*", (req, res) => res.send("404 error ,Page not found"));
app.listen(PORT, () => console.log(`I am running on port ${PORT}....`));
