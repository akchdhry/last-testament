const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chapterController');

router.get('/', chapterController.getAll);
router.get('/:id', chapterController.getById);

module.exports = router;