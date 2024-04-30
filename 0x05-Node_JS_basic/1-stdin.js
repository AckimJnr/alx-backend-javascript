process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const name = data.trim();
  if (name) {
    console.log('Your name is:', name);
  }
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
    process.exit();
  });
  process.exit();
});
