const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home/index')
})

app.get('/news_former', function (req, res) {
  res.render('admin/form_add_news')
})

app.get('/news', function (req, res) {
  res.render('news/news')
})

app.listen(3000, function() {
  console.log('App running at 3000 with express')
})