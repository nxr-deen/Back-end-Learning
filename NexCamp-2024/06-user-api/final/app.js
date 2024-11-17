const express = require('express');
const app = express();
const port = 3000;


let users = [
    { id: 1, name: "user-1233" },
    { id: 2, name: "user-1652" },
    { id: 3, name: "user-1533" },
    { id: 4, name: "user-1453" },
]

app.get('/', (req, res) => {
    res.status(200).send('Test ur api!');
});

app.get("/api/users ", (req, res) => {
    res.status(200).json(users);
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

