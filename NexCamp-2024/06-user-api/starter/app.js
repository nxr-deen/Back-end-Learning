const express = require('express');
const app = express();
const port = 3000;


let users = [
    { id: 1, name: "user-1233" },
    { id: 2, name: "user-1652" },
    { id: 3, name: "user-1533" },
    { id: 4, name: "user-1453" },
    { id: 5, name: "user-1113" },
    { id: 6, name: "user-1003" },
]



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

