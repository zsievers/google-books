const express = require('express');
const mongoose = require('mongoose');
// const routes = require("./routes");
// const bodyParser = require('body-parser');

const app = express();
const PORT =  process.env.PORT || 5000;

// DEFINE MIDDLEWARE
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes both api and view
// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

