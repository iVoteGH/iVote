require('../secrets');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.Port || 8080;
const NewsAPI = require('newsapi');
const app = express();
const axios = require('axios');

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
      pageSize: 6,
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
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
