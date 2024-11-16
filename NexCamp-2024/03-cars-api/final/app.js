const express = require("express");
const app = express();
const port = 3000;

let cars = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
];

// READ: Get all cars
app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});