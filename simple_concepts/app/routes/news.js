const databaseConnection = require('../../config/database')

module.exports = function (app) {
  const connection = databaseConnection()

  app.get('/news', function (req, res) {
    
    connection.query('select * from news', function(error, result) {
      res.render('news/news', { news: result })
    })
  })
}