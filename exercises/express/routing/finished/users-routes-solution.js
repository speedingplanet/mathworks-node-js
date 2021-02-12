// Move all routing code here.
// Export it so it is available to routing.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This will retrieve a list of users.');
});
router.get('/:id', (req, res, next) => {
  res.send(`This will retrieve the user with the id ${req.params.id}`);
});
router.post('/:id', (req, res, next) => {
  res.send(`This will update the user with the id ${req.params.id}`);
});
router.post('/', (req, res, next) => {
  res.send('This will add a new user');
});
router.put('/', (req, res, next) => {
  res.send('This will add a new user');
});
router.delete('/:id', (req, res, next) => {
  res.send(`This will delete the user with the id ${req.params.id}`);
});

module.exports = router;
