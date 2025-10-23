import fs from 'fs';
fs.copyFile('anubhav.txt', 'mydata.txt', (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully');
    }
});
