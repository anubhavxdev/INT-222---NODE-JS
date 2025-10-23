import zlib from 'zlib';
const data = "this is some data to be compressed";
zlib.gzip(data, (err, buffer) => {
    if (err) return console.error('Error during compression:', err);
    console.log('Compressed data:', buffer);
});