const express = require('express');
const post = require('./post');
const list = require('./list');
const get = require('./get');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', post);
router.get('/', auth, list);
router.get('/:id', auth, get);

module.exports = router;