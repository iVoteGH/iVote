require('../secrets');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.Port || 8080;
const NewsAPI = require('newsapi');
const app = express();

module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
let sources = 'the-new-york-times, the-wall-street-journal, fox-news, breitbart'

app.get('/api/search', async (req, res, next) => {
    let q = req.query.q;
    let selectedSources = req.query.sources
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
          })
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
