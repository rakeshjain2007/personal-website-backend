const express = require('express');
const education = require('./data/education');
const work_experience = require('./data/work_experience');

const app = express();
const port = process.env.PORT || 3000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Respond with 200 status to preflight requests
  }
  
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/education', (req, res) => {
    res.json(education);
});

app.get('/work', (req, res) => {
    res.json(work_experience);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});