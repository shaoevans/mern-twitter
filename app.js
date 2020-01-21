const express = require("express");
const mongoose = require("mongoose");
const db =  require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const app = express();
const User = require("./models/User");
const bodyParser = require("body-parser");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("connected"))
    .catch((errs) => console.log(errs))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);



const port = process.env.PORT || 5000;

app.listen(port, () => {console.log("Listening")})