const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cars'
});

connection.connect( err => {
  if (err) {
    console.log(err);
    return err;
  }
  else {
    console.log("Database ---- OK");
  }
});

app.get('/api/get', (req, res) => {
  
  connection.query('SELECT * FROM car', function (err, result, fields) {
    console.log(err);
    console.log(result);
    res.json(result);
    });
});

app.get('/api/get/:id', (req, res) => {
  const id= req.params.id;
  connection.query('SELECT * FROM car',  function (err, result, fields) {
    res.json(result[id]);
      }
    );
});

app.post('/api/create', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const description = req.body.description
  const power = req.body.power
  const speed = req.body.speed

  connection.query (
    'INSERT INTO  cars.car (title, description, power, speed) VALUES(?,?,?,?)',
    [title, description, power, speed],
    (err, result) => {
      console.log(err);
      console.log(result);
      
    }
  );
});

app.put('/api/update', function (req, res) {
  const id = req.body.id
  const title = req.body.title
  const description = req.body.description
  const power = req.body.power
  const speed = req.body.speed
  res.send('Got a PUT request at /user');
  connection.query(
    'UPDATE cars.car SET title =?, description =?, power =?, speed=? WHERE id = ?',
    [title, description, power, speed, id],
    (err, result) => {
    if (err) {
      console.log('error:', err);
      result(null, err);
    return;
    }
    console.log(result)
    console.log ("err",err)
    console.log ('id', id)
    });
});

app.delete('/api/delete/:id', (req, res) => {
  const id= req.params.id;
  connection.query('delete from cars.car where id = ?', [id],
  (err, result) => { 
    console.log('result dell', result)
  });
});
