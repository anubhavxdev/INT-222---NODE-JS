import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const app = express();

// Properly define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve form
app.get('/showform', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submitform', (req, res) => {
  const { username, email } = req.body;
  res.send(`
    <h2>Submitted details are:</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
  `);
  console.log(req.body);
  
  fs.appendFile('formdata.txt', JSON.stringify(req.body) + '\n', (err) => {
    if (err) throw err;
    console.log('Data saved to formdata.txt');

  });

});

// Start server
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
  console.log("🌐 Go to http://localhost:3000/showform to see the form");
});
