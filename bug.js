const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

//This code is intended to start a simple HTTP server that responds with a JSON message. However, there might be a potential error that's not immediately obvious: improper handling of errors.

//For example, if there's an issue with the server binding to the port, the code will silently fail without any indication.  A more robust version would include error handling.
