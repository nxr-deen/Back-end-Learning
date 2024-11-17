const express = require('express');
const app = express();
const port = 3000;


const logRequestDetails = (req, res, next) => {
  const userAgent = req.get("User-Agent"); 
  const ip = req.ip; 
  const method = req.method;

  console.log(`Method: ${method}, IP: ${ip}, User-Agent: ${userAgent}`);
  next(); 
};

app.use(logRequestDetails);

app.get("/", (req, res) => {
  res.send("from /");
});
app.get('postes',)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

