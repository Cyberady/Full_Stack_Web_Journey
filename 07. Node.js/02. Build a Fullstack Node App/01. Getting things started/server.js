/*
Challenge 1: 
1. Initialise a nodejs project:
	Name: “from-the-other-side”.
    Description: “A platform for sharing ghostly encounters”.

2. Enable modular js (in package.json).

hint.md for help
*/

/*
Challenge 2: 
1. Setup a server that serves the string
   '<html><h1>The server is working</h1></html>'.

   What should the content type be?
   What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML

*/

import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader = ('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => console.log(`Connected on port: http://localhost/${PORT}`))