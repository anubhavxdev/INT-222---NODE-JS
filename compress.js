import zlib from 'zlib';
import fs from 'fs';

const readStream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream('data.txt.gz');

const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);
writeStream.on('finish', () => {
    console.log('File successfully compressed');
});
writeStream.on('error', (err) => {
    console.error('Error during compression:', err);
});

