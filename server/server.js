const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_nodejs_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connection to database');
    } else {
        console.log('Connected to database');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ seccess: true, message: 'Login successfully' });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    });
});

app.listen(port, () => {
    console.log('Server is runnning');
});