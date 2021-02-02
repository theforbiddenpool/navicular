const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/db/index');

app.use((req, res) => {
  res.status(404);
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('started server');
});
