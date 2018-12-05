require('../secrets');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.Port || 8080;
const NewsAPI = require('newsapi');
const app = express();
const axios = require('axios');
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

app.get('/api/search', async (req, res, next) => {
  let q = req.query.q;
  let selectedSources = req.query.sources;
  let from = req.query.from;
  let to = req.query.to;

  try {
    let response = await newsapi.v2.everything({
      q,
      sources: selectedSources,
      language: 'en',
      sortBy: 'publishedAt',
      from,
      to,
      pageSize: 3,
    });
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.get('/api/memId/:state', async (req, res, next) => {
  //two candidate id's
  try {
    const response = await axios({
      url: `https://api.propublica.org/congress/v1/members/senate/${
        req.params.state
      }/current.json`,
      method: 'GET',
      dataType: 'json',
      headers: {
        'X-API-Key': process.env.PROPUBLICA_CONGRESS_API_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/members/:memId', async (req, res, next) => {
  //two candidate id's
  try {
    const response = await axios({
      url: `https://api.propublica.org/congress/v1/members/${
        req.params.memId
      }.json`,
      method: 'GET',
      dataType: 'json',
      headers: {
        'X-API-Key': process.env.PROPUBLICA_CONGRESS_API_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/pressReleases/:memId', async (req, res, next) => {
  try {
    const response = await axios({
      url: `https://api.propublica.org/congress/v1/members/${
        req.params.memId
      }/statements/115.json`,
      method: 'GET',
      dataType: 'json',
      headers: {
        'X-API-Key': process.env.PROPUBLICA_CONGRESS_API_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  const number = process.env.MY_NUMBER;
  const from = process.env.TWILIO_PHONE_NUMBER;
  const body = 'Congrats! Your vote has been registered!';
  client.messages
    .create({
      body: body,
      from: from,
      mediaUrl: 'https://media.giphy.com/media/McWY8InTbUrrW/giphy.gif',
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.error(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
