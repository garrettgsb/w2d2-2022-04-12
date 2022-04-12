{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(callback, chance=0.1) {
    if (Math.random() < chance) {
      callback();
    };
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan);
  }
  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan, 0.5);
  }
  for (let i = 0; i < 100; i++) {
    maybeRun(countTimesRan, 0.9);
  }
}

{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function shouldRun(callback) {
    if (Math.random() < 0.1) {
      callback();
    };
  }

  for (let i = 0; i < 100; i++) {
    shouldRun(countTimesRan);
  }
}
