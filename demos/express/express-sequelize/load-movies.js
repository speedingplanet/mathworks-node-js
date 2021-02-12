const Movie = require('./Movie');

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

function bulkInsertMovies() {
  return Movie.bulkCreate(movies);
}

async function setUpDatabase() {
  try {
    await Movie.sync({ force: true });
    await bulkInsertMovies();
  } catch (err) {
    console.error('setUpDatabase: ', err);
  }
}

module.exports = { movies, bulkInsertMovies, setUpDatabase };
