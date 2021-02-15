const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/db/index');

app.use('/api/auth', require('./src/routes').auth);

app.use((req, res, next) => next({ status: 404, message: 'not found' }));

app.use((err, req, res, next) => {
  const errCode = err.status || 500;
  const errMessage = err.message || 'Internal Server Error';
  res.status(errCode).json({ error: errMessage });
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('started server');
});
