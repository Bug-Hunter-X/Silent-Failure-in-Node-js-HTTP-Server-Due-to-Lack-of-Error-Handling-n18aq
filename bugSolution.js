const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use.');
  }
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
//The improved code now includes an 'error' event listener for the server. This listener catches errors that occur during server operations, providing more informative error messages to the console and making debugging easier.