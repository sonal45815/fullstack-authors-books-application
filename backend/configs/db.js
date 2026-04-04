const mysql = require('mysql2');

const db = mysql.createConnection({
   host: 'database-1.cdaycqom6oh3.ap-south-1.rds.amazonaws.com',
   port: '3306',
   user: 'admin',
   password: 'Sonal45815',
   database: 'react_node_app'
});

module.exports = db;
