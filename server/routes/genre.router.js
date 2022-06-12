const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// this post receives the movie object and takes out the ID to shove into the query string
// that takes from the server the genre names that correspond to the movie poster the user click on.
router.post('/', (req, res) => {
  console.log('post router',req.body.id);
  
  const query = `select genres.name from movies
  join movies_genres on movies.id = movies_genres.movie_id
  join genres on movies_genres.genre_id = genres.id
  where movies.id = ${req.body.id};`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
})

module.exports = router;