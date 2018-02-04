module.exports = function (app) {
  app.get('/news_form', function (req, res) {
    res.render('admin/form_add_news')
  })
}