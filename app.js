
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    res.end('<h1>Hello World</h1>')
})
server.listen(8083, ()=>{
  console.log('listeing on 8083');
});