const express = require('express');
const post = require('./post');
const list = require('./list');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.post('/', post);
router.get('/', list);
router.get('/:id', get);

module.exports = router;