'use strict';

const express = require('express');
const router = express.Router();
const reader = require('../examples/reader');

router.get('/', reader.get);

module.exports = router;