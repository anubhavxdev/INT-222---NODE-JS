// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('<h2 style="color: orange;"> welcome to the main page</h2>');
// });
// app.get('/login', (req, res) => {
//     res.send('<h2 style="color: purple;"> welcome to login page</h2>');
// });
// app.get('/home', (req, res) => {
//     res.send('<h2 style="color: blue;"> welcome to home page</h2>');
// });

// app.get('/about', (req, res) => {
//     res.send('<h2 style="color: green;"> welcome to about page</h2>');
// });


// app.listen(3000, () => {
//     console.log("Express server is listening on port 3000");
// });


const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/', (req, res) => {
  const { username, email } = req.body;
  res.send(`<h2>Form Submitted!</h2><p>Username: ${username}</p><p>Email: ${email}</p>`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
