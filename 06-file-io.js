// This is the original code that we ended our lecture with
const fs = require('fs');

let mNames;
let fNames;
let surnames;

// Run this five times... Notice any difference?
fs.readFile(
  './female-first-names-en-dataset.json',
  { encoding: 'utf8' },
  (err, data) => {
    fNames = JSON.parse(data);
    fs.readFile(
      './1000-most-common-surnames.txt',
      { encoding: 'utf8' },
      (err, data) => {
        surnames = data.split(',\n');
        const fName = selectRandomItem(fNames);
        const surname = selectRandomItem(surnames);
        console.log(`${fName} ${surname}`);
      }
    );
  }
);

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
