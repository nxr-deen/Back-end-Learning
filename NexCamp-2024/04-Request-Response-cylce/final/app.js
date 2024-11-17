const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req, res) => {

  const ip = req.ip; 
  const userAgent = req.get("User-Agent"); 
  const method = req.method; 
  const path = req.originalUrl;
  const Accept = req.get("Accept"); 
  console.log(`************************************`);
  console.log(`IP: ${ip}`);
  console.log(`User-Agent: ${userAgent}`);
  console.log(`Method: ${method}`);
  console.log(`Path: ${path}`);
  console.log(`Accept-Content: ${Accept}`);
  console.log(`************************************`);

  res.status(200).send("Test your API!");
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

