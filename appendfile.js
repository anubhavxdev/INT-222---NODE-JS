import fs from 'fs';
const data = "this is my data to append\n";
fs.appendFile('data.txt', data, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended successfully');
        const readData = fs.readFileSync('data.txt', 'utf8');
        console.log('File content after append:\n', readData);
    }
});
