const express = require('express');
const Movie = require('./Movie');
const router = express.Router();

let movies = [
  {
    id: 1,
    title: 'Raiders of the Lost Ark',
    year: '1981',
    rating: 10,
  },
  {
    id: 2,
    title: 'Spider-Man 2',
    year: '2004',
    rating: 8,
  },
  {
    id: 3,
    title: 'Casablanca',
    year: '1942',
    rating: 9,
  },
  {
    id: 4,
    title: 'Star Wars',
    year: '1977',
    rating: 7,
  },
  {
    id: 5,
    title: 'Pleasantville',
    year: '1998',
    rating: 8,
  },
  {
    id: 6,
    title: 'Spirited Away',
    year: '2001',
    rating: 10,
  },
];

router.get('/', async (req, res, next) => {
  res.json(await Movie.findAll({ where: { deletedAt: null } }));
});

router.get('/deleted', async (req, res, next) => {
  res.json(await Movie.findAll({ where: { deletedAt: !null } }));
});

router.get('/:id', async (req, res, next) => {
  let movie = await Movie.findByPk(req.params.id);
  if (movie) {
    res.json(movie.toJSON());
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', (req, res, next) => {
  let movie = movies.find((movie) => movie.id === Number(req.params.id));
  if (movie) {
    movie.deletedAt = Date.now();
    res.status(200);
    res.send(`Movie "${movie.title}" deleted.`);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', addMovie);
router.put('/', addMovie);
router.post('/:id', updateMovie);

function addMovie(req, res, next) {
  // Assumes JSON, and the correct format
  let nextMovie = req.body;
  let lastId = Math.max(...movies.map((movie) => movie.id));
  nextMovie.id = lastId + 1;
  movies.push(nextMovie);
  res.status(201); // Created
  res.location(`/${nextMovie.id}`);
  res.send(
    `Movie "<a href=\"${req.baseUrl}/${nextMovie.id}\">${nextMovie.title}</a>" added`
  );
}

function updateMovie(req, res, next) {
  // Assumes JSON, and the correct format
  let updatedMovie = req.body;
  let foundMovie = movies.find(
    (movie) => !movie.deletedAt && movie.id === Number(req.params.id)
  );
  if (!foundMovie) {
    res.sendStatus(404);
  }

  Object.assign(foundMovie, updatedMovie);
  res.status(200); // Updated, with response
  res.location(`/${foundMovie.id}`);
  res.send(
    `Movie "<a href=\"${req.baseUrl}/${foundMovie.id}\">${foundMovie.title}</a>" updated`
  );
}

module.exports = router;
