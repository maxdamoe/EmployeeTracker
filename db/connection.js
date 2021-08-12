const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'b2yEthFa4Pcv74#zect2',
  database: 'election'
});

module.exports = db;
