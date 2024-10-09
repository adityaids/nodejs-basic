const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

const readableStream = fs.createReadStream('./filesystem/article.txt', {
  highWaterMark: 10
});

readableStream.on('readable', () => {
  try {
      process.stdout.write(`[${readableStream.read()}]`);
  } catch(error) {
      console.log(error)
  }
});

readableStream.on('end', () => {
  console.log('Done');
});