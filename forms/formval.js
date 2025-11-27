import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { body, validationResult } from 'express-validator';


// Properly define __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));

// Serve form
app.get('/showform', (req, res) => {
  res.sendFile(path.join(__dirname, 'formvalidation.html'));
});

app.post('/submitform',
    // Validation rules
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Process the valid form data
      res.send('Form submitted successfully');
    }
);

// Start server
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
  console.log("🌐 Go to http://localhost:3000/showform to see the form");
});