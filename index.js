const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello, Sasha');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('listening on the port 3000...'));