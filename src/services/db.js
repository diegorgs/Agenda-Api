const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_SENHA,
    database: process.env.DB_BANCO
})

conn.connect((error)=>{
        if(error) throw error;
        console.log('Conectado ao banco MySql')
})

module.exports = conn;