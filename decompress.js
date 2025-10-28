import zlib from 'zlib';
import fs from 'fs';

const readStream = fs.createReadStream('data.txt.gz');
const writeStream = fs.createWriteStream('data.txt'); 
const gunzip = zlib.createGunzip();

readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on('finish', () => {
        console.log('File successfully decompressed');
    })
    .on('error', (err) => {
        console.error('Error during decompression:', err);
    });

readStream.on('error', (err) => console.error('Read error:', err));
