## Blocking vs. non-blocking

* `sleep` (as in bash, Ruby, or Python... or our Javascript implementation) is blocking: It stops the execution of the rest of the program while it does its work
* `setTimeout` is non-blocking: Program execution can continue while the callback waits to run
* Javascript tends to be non-blocking by default, because it's designed for adding interactivity to web pages
  * We don't want to cause a webpage to freeze while we wait for something else to happen!
  * This tendency makes some **hard** problems **easier...** (e.g. handling user interface interactions on a webpage)
  * But it also makes some **easy** problems **harder.** (e.g. prompting for user input in a CLI app)


## Anatomy of an Asynchronous Call

Asynchronous functions generally follow the same rough shape:

* What's the task? (the name of the function)
* What's the target? (an argument, like a number of milliseconds, a file path, a URL, etc.)
* What should be done when it's time? (a callback function)

For `setTimeout`, it looks like this:

```
setTimeout(() => console.log('Done!'), 1000);

setTimeout -> The task: Do something after an amount of time has elapsed
() => console.log('Done!') -> The behavior: Do this when it's time (i.e. the time has elapsed)
1000 -> The target: How many milliseconds to wait
```

But other asynchronous calls follow the same pattern. e.g. File reads:

```
const fs = require('fs') // The file system module-- Built into Node!
fs.readFile('./cool-stuff.txt', { encoding: 'utf8' }, () => console.log('Done!'));

fs.readFile -> The task: Read a file and then do something when it's done
'./cool-stuff.txt' -> The target: The path to a file
() => console.log('Done!') -> The behavior: Do this when it's time (i.e. the file is read)

// Don't let `{ encoding: 'utf8' }` throw you off-- It's just another argument!
```

Or another example: Event handlers on a webpage:

```
button.addEventListener('click', () => console.log('Done!'));

button.addEventListener -> The task: Run a function when the event occurs on the element (button)
'click' -> The target: The specific type of event to respond to
() => console.log('Done!') -> The behavior: Do this when it's time (i.e. the button is clicked)
```
