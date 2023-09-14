const fs = require('fs');
const fsPromises = require('fs/promises');
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

// fs.writeFile(
//   path.join(__dirname, 'files', 'texts', 'test.txt'),
//   'Nice to meet you.',
//   (err) => {
//     if (err) throw err;
//     console.log('write completed');
//     fs.appendFile(
//       path.join(__dirname, 'files', 'texts', 'test.txt'),
//       '\n \n yes it is.',
//       (err) => {
//         if (err) throw err;
//         console.log('append completed');
//       }
//     );
//   }
// );

// ! USING FS-PROMISE INSTEAD OF FS
fsPromises
  .writeFile(
    path.join(__dirname, 'files', 'texts', 'test.txt'),
    'hello world',
    (err) => {
      if (err) throw err;
      console.log('write completed');
    }
  )
  .then(
    fsPromises.appendFile(
      path.join(__dirname, 'files', 'texts', 'test.txt'),
      '\n \n from new world',
      (err) => {
        if (err) throw err;
        console.log('append completed');
      }
    )
  )
  .then(
    fsPromises.rename(
      path.join(__dirname, 'files', 'texts', 'test.txt'),
      path.join(__dirname, 'files', 'texts', 'example.txt')
    ),
    (err) => {
      if (err) throw err;
      console.log('rename completed');
    }
  );

// ERROR CALLBACK
process.on('uncaughtException', (err) => {
  console.log('uncaught error finded', err);
  process.exit();
});
