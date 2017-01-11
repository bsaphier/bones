/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Rock = db.model('rocks');
const Category = db.model('categories');

const router = require('express').Router();

// get all the categories and respective rocks
router.get('/', (req, res, next) => {
  Category.findAll({ include: [Rock] })
    .then(categories => res.json(categories))
    .catch(next);
});

// get a single category
router.get('/:id', (req, res, next) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Rock]
  })
    .then(category => res.json(category))
    .catch(next);
});


// add a category
// EI: more RESTful to post to `/categories` to create a new category
router.post('/', (req, res, next) => {
  Category.create(req.body)
    .then(category => res.status(201).send(category))
    .catch(next);
});

// edit a category
// EI: more RESTful to put to `/categories` to update a category
router.put('/edit/:id', (req, res, next) => {
  Category.findById(req.params.id)
    .then(category => category.update(req.body))
    .then(res.sendStatus(200))
    .catch(next);
});
module.exports = router;
