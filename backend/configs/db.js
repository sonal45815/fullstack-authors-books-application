const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql',
  port: 3306,
  user: 'sonal',
  password: 'Sonal@45815',
  database: 'react_node_app'
});

module.exports = db;
