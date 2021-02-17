const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./src/db/index');

const routes = require('./src/routes');

app.use('/api/auth', routes.auth);
app.use('/api/users', routes.users);

app.use((req, res, next) => next({ name: 'HttpError', status: 404, message: 'not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let errCode = 500;
  let errMessage = 'internal server error';
  if (err.name === 'HttpError') {
    errCode = err.status;
    errMessage = err.message;
  } else {
    console.error(err);
  }
  res.status(errCode).json({ error: errMessage });
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('started server');
});
