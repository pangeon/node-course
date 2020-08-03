const $mysql = require('mysql');

const DB = $mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'programming_books'
});
const SQLquery = 'SELECT * from items';

DB.connect((err) => { err ? console.log(err) : console.log('Connection success !'); });
DB.query(SQLquery, (err, rows) => { err ? console.log(err) : console.log(rows); });
DB.end();

