const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

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

  // axios.get(``)
  // .then((response) => res.send(response.data))
  // .catch(err => {
  //     console.log(err);
  //     res.sendStatus(500);
  // });
})

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

  
});

module.exports = router;