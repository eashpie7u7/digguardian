const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'robot_data',
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT temperatura, distancia FROM data', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
