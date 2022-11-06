const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./db');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(require('./routes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to DB and listening on ${port}`);
  }
});