const fs = require('fs');
const path = require('path');

fs.readFile(
  path.join(__dirname, 'files', 'texts', 'hello.txt'),
  'utf-8',
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
);

process.on('uncaughtException', (err) => {
  console.log('uncaught error finded', err);
  process.exit();
});
