const express = require("express");
const app = express();

// read
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})
// create
app.post("/", (req, res) => {
    res.status(201).send("Hello World");
})
// Bad Request
app.get("/bad", (req, res) => {
    res.status(400).send("Bad Request");
})
// Not Found
app.get("/not-found", (req, res) => {
    res.status(404).send("Not Found");
})
// Internal Server Error
app.get("/error", (req, res) => {
    res.status(500).send("Internal Server Error");
})


app.listen(3000, () => {
    console.log("Server is running...");
});
