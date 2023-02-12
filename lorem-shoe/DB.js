const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lorem_shoe',
});

connection.connect(err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Connected to MySQL!');

    const sql = 'select * from user';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Data from the `users` table:');
        console.log(results);
        connection.end();
    });
});