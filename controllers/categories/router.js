const express = require('express');
const post = require('./post');
const list = require('./list');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', post);
router.get('/', auth, list);

module.exports = router;