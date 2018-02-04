const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<html><body> News Portal</body></html>')
})

app.get('/tecnology', function (req, res) {
  res.send('<html><body> Tecnology news </body></html>')
})

app.listen(3000, function() {
  console.log('App running at 3000 with express')
})