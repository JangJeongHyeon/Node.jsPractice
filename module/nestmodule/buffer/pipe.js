const fs = require('fs');

const readStream = fs.createReadStream('../file/readme2.txt');
const writeStream = fs.createWriteStream('./readme2FromFile.txt');
readStream.pipe(writeStream);
