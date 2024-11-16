const express = require("express");
const app = express();
const PORT = 3000;

let cars = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, make: "Honda", model: "Civic", year: 2022 },
];

app.use((req, res, next) => {
  const currentDate = new Date();
  console.log(`[${currentDate.toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.put("/api", (req, res) => {
  res.status(404).send("Hello from another world");
});

app.get("/cars/:id", (req, res) => {
  res.status(200).json(cars);
});
