require("dotenv").config();
const constants = require("./constants");
const express = require("express")
const path = require("path");

const app = express()

const serve = app.listen(constants.HTTP_PORT, "localhost", function() {
    console.log("Server is running on port", serve.address().port);
})

app.get("/", function(req, res) {
    res.status(parseInt(constants.HTTP_RESPONSE_OK)).sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/", function(req, res) {
    res.status(parseInt(constants.HTTP_RESPONSE_OK)).json({name: "John"});
});

app.use(express.static(path.join(__dirname, "public")))