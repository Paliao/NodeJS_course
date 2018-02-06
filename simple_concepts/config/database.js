const mysql = require('mysql')

const connectMySql = () => (
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.',
    database: 'news_portal'
  })
)

module.exports = () => connectMySql