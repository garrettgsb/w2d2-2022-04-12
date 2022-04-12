// This is the code that we wrote after lecture finished

const fs = require('fs');

let mNames;
let fNames;
let surnames;

// This was our attempt to "clean up" the original, which called `fs.readFile` directly, and got a little wordy
read('./female-first-names-en-dataset.json', (data) => {
    fNames = JSON.parse(data);
    read('./1000-most-common-surnames.txt', (data) => {
        surnames = data.split(',\n');
        generateName();
      });
  });

// You'll learn Promises soon, I promise :)
Promise.all([
  fs.promises.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }),
  fs.promises.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }),
]).then((data) => {
  const surnames = data[0].split(',\n');
  const fNames = JSON.parse(data[1]);
  generateNames(surnames, fNames);
});

function read(path, callback) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) { console.log('Oops'); return }
    callback(data);
  });
}

function generateName() {
  const fName = selectRandomItem(fNames);
  const surname = selectRandomItem(surnames);
  console.log(`${fName} ${surname}`);
}

fs.readFile(
  './male-first-names-en-dataset.json',
  { encoding: 'utf8' },
  (err, data) => {
    mNames = JSON.parse(data);
  }
);

function selectRandomItem(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

// database.query('SELECT * FROM users;', (result) => {...});
