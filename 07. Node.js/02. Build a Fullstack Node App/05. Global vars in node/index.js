// import http from 'node:http'
// const http = require('http')

// ES module befor V20

import path from 'node:path'
import url from 'node:url'


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename)
console.log(__dirname)

// ES Modules using import.meta V20+ 


// console.log(import.meta.dirname)
// console.log(import.meta.filename)

