import fs from 'fs';
const writestream = fs.createWriteStream('wstream.txt', { encoding: 'utf8' });
writestream.write('Hello, this is a test write stream.\n');
writestream.write('Writing another line to the file.\n');
writestream.end();
writestream.on('finish', () => {
    console.log('Finished writing to stream');
});
writestream.on('error', (err) => {
    console.error('Error writing to stream:', err);
});