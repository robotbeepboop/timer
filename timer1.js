let input = process.argv.slice(2); //selects the user input

const timer = (waitTime) => {
  setTimeout(() => {
    process.stdout.write('\x07'); //same format as earlier exercises
  }, (waitTime * 1000));
}

for (let num of input) {
  if (num < 0 || isNaN(num)) {
    return undefined;
  }
  timer(num);
}
