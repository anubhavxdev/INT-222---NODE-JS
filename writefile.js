import fs from 'fs';
fs.writeFileSync('anubhav.txt', 'Hello Anubhav! This is your first file operation in Node.js.');
fs.appendFileSync('anubhav.txt', '\nThis line is appended to the file.');
console.log('File operations completed. Check anubhav.txt for the results.');

fs.readFileSync('anubhav.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Could not read file:", err);
        return;
    }
    console.log("File contents:", data);
});

// Synchronous file read
const content = fs.readFileSync('anubhav.txt', 'utf8');
console.log("Synchronous read:", content);