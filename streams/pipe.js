import fs from 'fs';
const readstream = fs.createReadStream('rstream.txt', { encoding: 'utf8' });
const writestream = fs.createWriteStream('wstream.txt', { encoding: 'utf8' });
readstream.pipe(writestream);
writestream.on('finish', () => {
    console.log('Finished piping data from read stream to write stream');
});