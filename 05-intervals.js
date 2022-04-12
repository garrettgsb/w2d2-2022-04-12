// The interface for setInterval is the same as setTimeout (including the return value)
{
  // const interval = setInterval(() => { console.log('tick') }, 1000);
  // setTimeout(() => clearInterval(interval), 4000);
}


{
  let counter = 0;
  const interval = setInterval(() => {
    console.log('tick');
    if (counter === 3) { clearInterval(interval) }
    counter++;
  }, 1000);
}
