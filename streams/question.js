// build a node js program that reads the console input, converts it to uppercase using a transform stream and stores the same into a file using streams.

import fs from 'fs';
import { Transform } from 'stream';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const upperCaseChunk = chunk.toString().toUpperCase();
        callback(null, upperCaseChunk);
    }
});
const writestream = fs.createWriteStream('output.txt', { encoding: 'utf8' });
writestream.on('finish', () => {
    console.log('Finished writing to file');
});
writestream.on('error', (err) => {
    console.error('Error writing to file:', err);
});
console.log('Enter text (type "exit" to quit):');
rl.on('line', (input) => {
    if (input.trim() === 'exit') {
        rl.close();
        writestream.end();
    } else {
        upperCaseTransform.write(input);
    }
});
upperCaseTransform.pipe(writestream);