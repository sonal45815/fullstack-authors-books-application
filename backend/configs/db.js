const mysql = require('mysql2');

const db = mysql.createConnection({
   host: '127.0.0.1',     // ← Changed from 34.55.43.79
   port: 3306,
   user: 'sonal',
   password: 'Sonal@45815',
   database: 'react_node_app'
});

module.exports = db;
