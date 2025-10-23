//file system module
// import fs from 'fs';
// const filename = 'anubhav.txt';

// fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error("Could not read file:", err);
//         return;
//     }
//     console.log("File contents:", data);
// });


import fs from 'fs';
const data = fs.readFileSync('data.json', 'utf8');
console.log(data);
const filename = 'data.json';
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error("Could not read file:", err);
        return;
    }
    const newdata = JSON.parse(data);
    console.log(newdata.name);
    console.log(newdata.age);
    console.log(newdata.city);
});