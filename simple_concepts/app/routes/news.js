module.exports = function (app) {

  app.get('/news', function (req, res) {

    const connection = app.config.database()
    
    connection.query('select * from news', function(error, result) {
      res.render('news/news', { news: result })
    })
  })
}