import fs from 'fs';
const readstream = fs.createReadStream('rstream.txt',{encoding: 'utf8', start:0, end:10});
readstream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
});
readstream.on('end', () => {
    console.log('Finished reading stream');
});