const express = require('express'); 
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));



app.get("/", (req, res) => res.send("hello"))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`servers is running on port ${port}`))

const users = require("./routes/api/users");
app.use("/api/users", users);