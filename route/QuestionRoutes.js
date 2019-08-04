const express = require('express');
const router = express.Router();
const controller = require('../controller/QuestionController');

router.get('/:id', controller.getQuestion);

module.exports = router;