const express = require('express');
const router = express.Router();
const verseController = require('../controllers/verse-controller');

router.get('/chapter/:chapterId', verseController.getByChapter);
router.get('/key/:key', verseController.getByKey);
router.get('/range', verseController.getbyRange);

module.exports = router;