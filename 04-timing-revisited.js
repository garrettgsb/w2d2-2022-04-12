// We want to say "do X in Y milliseconds."
// So it's not like the whole program has to wait for 2 seconds, then do a thing, then wait, then do a thing...
// It's like you say "Hey, do your thing, but when 2 seconds have passed, run this, k?"
function doXInYMs(x /* a function */, y /* some number of milliseconds */) {
  setTimeout(x, y);
}

let someVar = 'a'

console.log('Start');
setTimeout(() => { someVar = 'b'; console.log('2 seconds have passed...')}, 2000);
setTimeout(() => { someVar = 'c'; console.log('4 seconds have passed...')}, 4000);
setTimeout(() => { someVar = 'd'; console.log('5 seconds have passed...')}, 5000);
setTimeout(() => { someVar = 'e'; console.log('5.5 seconds have passed...')}, 5500);
console.log('End');
console.log(someVar);
setTimeout(() => console.log(someVar), 6000);


// Here's a weird gotcha: `console.log` before and after... Why?
