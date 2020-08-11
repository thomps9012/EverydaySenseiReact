const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = requier('./models');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sets up connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'everydaysensei'
});

//connect to database
connection.connect();

app.use(routes)

db.sequelize.sync().then(function(){
  app.listen(3001, function(){
    console.log('app listening on port 3001!');
  });
});
