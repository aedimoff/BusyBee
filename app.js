const path = require('path');
const express = require('express'); 
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const googleroute = require("./routes/api/google");
const request = require('request');

require('dotenv').config()


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/public', 'index.html'))
    })

app.use(passport.initialize());
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users)
app.use("/api/googleroute", googleroute)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`servers is running on port ${port}`))
