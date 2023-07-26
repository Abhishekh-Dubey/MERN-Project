const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase is now connected...."))
  .catch((err) => console.log(err));

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};
app.get("/", (req, res) => res.send("hello ,Wellcome to home page"));
app.get("/about", middleware, (req, res) =>
  res.send("hello ,Wellcome to about page")
);
app.get("/contect", (req, res) => res.send("hello ,Wellcome to contect page"));
app.get("/singin", (req, res) => res.send("hello ,Wellcome to singin page"));
app.get("/singup", (req, res) => res.send("hello ,Wellcome to singup page"));
app.get("*", (req, res) => res.send("404 error ,Page not found"));
app.listen(5000, () => console.log("I am running on port 5000...."));
