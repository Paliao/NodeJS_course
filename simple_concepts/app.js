const app = require('./config/server.js')

const homeRote = require('./app/routes/home')(app)
const formRoute = require('./app/routes/form_add_news')(app)
const newsRoute = require('./app/routes/news')(app)

app.listen(3000, function() {
  console.log('Server running at port 3000')
})