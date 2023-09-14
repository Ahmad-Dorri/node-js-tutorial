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

fs.writeFile(
  path.join(__dirname, 'files', 'texts', 'mytext.txt'),
  'Nice to meet you.',
  (err) => {
    if (err) throw err;
    console.log('wrote completed');
  }
);

fs.appendFile(
  path.join(__dirname, 'files', 'texts', 'test.txt'),
  'test file',
  (err) => {
    if (err) throw err;
    console.log('append completed');
  }
);

process.on('uncaughtException', (err) => {
  console.log('uncaught error finded', err);
  process.exit();
});
