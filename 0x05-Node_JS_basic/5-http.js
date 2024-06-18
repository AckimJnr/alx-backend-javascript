const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const url = new URL(`http://localhost:${port}${req.url}`);

  res.setHeader('Content-Type', 'text/plain');

  if (url.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    const databasePath = url.searchParams.get('database');
    if (!databasePath) {
      res.statusCode = 400;
      res.end('Error: Missing database path');
      return;
    }
    countStudents(databasePath)
      .then(() => {
        res.statusCode = 200;
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Error: Endpoint not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
