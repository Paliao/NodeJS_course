const http = require('http')

const server = http.createServer(function (req, res) {

  const url = req.url

  if(url === '/tecnology'){
    res.end('<html><body> Tecnology news </body></html>')
  } else if(url === '/life') {
    res.end('<html><body> Life news</body></html>')
  } else if(url === '/beauty') {
    res.end('<html><body> Beauty news</body></html>')
  } else {
    res.end('<html><body> News Portal</body></html>')
  }


})

server.listen(3000)