const mysql = require('mysql2');

const db = mysql.createConnection({
   host: '34.100.148.132',
   port: '3306',
   user: 'root',
   password: 'Sonal@45815',
   database: 'react_node_app'
});

module.exports = db;
