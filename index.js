require("dotenv").config();
const constants = require("./constants");
const express = require("express")
const path = require("path");

const app = express()

const serve = app.listen(constants.HTTP_PORT, "localhost", function() {
    console.log("Server is running on port", serve.address().port);
})

app.use(express.static(path.join(__dirname, "public")))

app.post("/", function(req, res) {
    res.status(parseInt(constants.HTTP_RESPONSE_OK)).json({name: "John"});
});

app.get("/", function(req, res) {
    res.status(parseInt(constants.HTTP_RESPONSE_OK)).sendFile(path.join(__dirname, "public/index.html"));
});


app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

