const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2 style="color: orange;"> welcome to the main page</h2>');
});
app.get('/login', (req, res) => {
    res.send('<h2 style="color: purple;"> welcome to login page</h2>');
});
app.get('/home', (req, res) => {
    res.send('<h2 style="color: blue;"> welcome to home page</h2>');
});

app.get('/about', (req, res) => {
    res.send('<h2 style="color: green;"> welcome to about page</h2>');
});


app.listen(3000, () => {
    console.log("Express server is listening on port 3000");
});