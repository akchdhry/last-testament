const client = require('../lib/quran-client');

exports.getByChapter = async (req, res) => {
  try {
    const verses = await client.verses.findByChapter(req.params.chapterNumber, {
        translations: [20], 
        perPage: 286,
    });
    res.json(verses);
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

exports.getByKey = async (req, res) => {
  try {
    const verse = await client.verses.findByKey(req.params.key, {translations: [20]});
    res.json(verse);
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

exports.getbyRange = async (req, res) => {
    try {
        const {from, to} = req.query;
        const verses = await client.verses.findByRange(from, to, {
        translations: [20], 
        perPage: 286,
        });
        res.json(verses);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};