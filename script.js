const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Both parameters must be numbers.');
  }

  const sum = num1 + num2;

  res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



