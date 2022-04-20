require('dotenv').config();
const Express = require('express');
const App = Express();
const pg = require('pg');
const Client = pg.Client;
const BodyParser = require('body-parser');
const { configObj } = require('./knexfile');
const request = require('request');
const fs = require('fs');
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

  // header = {
  //   apikey: process.env.API_KEY
  // }

// const options = {
//   url: `https://api.goog.io/v1/search/q=books&key=${process.env.API_KEY}`,
//   qs: '',
//   json: true,

// }
  
// request(options, (error, response, body) => {
//   if (error) throw new Error(error)
  
//   console.log(body)
// })

// const options = {
//   method: 'GET',
//   url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=restuarants',
//   headers: {
//     'X-User-Agent': 'desktop',
//     'X-Proxy-Location': 'CA',
//     'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.GOOGLE_API_KEY,
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });