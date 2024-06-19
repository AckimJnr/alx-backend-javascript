const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  console.log(`Your name is: ${name.trim()}\r`);  // Append \r to match the expected output format

  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  rl.close();

  // Delay exit to ensure all output is written before the process exits
  setTimeout(() => process.exit(), 100);
});
