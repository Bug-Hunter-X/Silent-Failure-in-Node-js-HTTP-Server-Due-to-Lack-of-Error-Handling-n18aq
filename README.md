# Silent Failure in Node.js HTTP Server

This repository demonstrates a common error in Node.js: the lack of proper error handling in an HTTP server.  The original code lacks error handling, meaning that issues like port binding failures will go unnoticed. The solution showcases how to gracefully handle such errors.

## Bug
The `bug.js` file contains the flawed code. It creates a simple HTTP server but doesn't handle potential errors during server creation or operation.

## Solution
The `bugSolution.js` file presents a corrected version, incorporating comprehensive error handling.  It checks for errors when the server starts and during the requestListener.