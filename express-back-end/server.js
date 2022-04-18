require('dotenv').config();
const Express = require('express');
const App = Express();
const pg = require('pg');
const Client = pg.Client;
const BodyParser = require('body-parser');
const { configObj } = require('./knexfile');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

const client = new Client(configObj);

client.connect();

/// Used below query to test that it was working

client.query(`SELECT * FROM users;`)
  .then((res) => {
    console.log(res.rows);
  });
