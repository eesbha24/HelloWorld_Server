const mysql = require('mysql2');

const dbConfig = {
    host: "sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "eesbha24",
    password: "TQfAp7xH7NCW",
    database: "webapp_9MF_eesbha24",
    connectTimeout: 10000
}

const connection = mysql.createConnection(dbConfig);

module.exports = connection;