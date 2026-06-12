import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) => {
  /*
Challenge:
1. Check the ‘url’ property on the req object. 
   Only serve our string if it’s ‘/api’.
2. Check the 'method' property on the req object.
   Only serve our string if the method is 'GET'.
*/

  if (req.url === "/api" && req.method === "GET") {
    res.end("This is from the server")
  }
})

server.listen(PORT, () =>
  console.log(`Connected on port: http://localhost:${PORT}`),
)
