const client = require('../lib/quran-client');

exports.getByChapter = async (req, res) => {
  try {
    const verses = await client.content.v4.verses.byChapter(req.params.chapterId, {
      tafsirs: [169],
      translations: [20],
      perPage: 286,
      fields: {textUthmani: true},
    });
    res.json(verses);
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

exports.getByKey = async (req, res) => {
  try {
    const verse = await client.content.v4.verses.byKey(req.params.key, {
        tafsirs: [171],
        translations: [20], 
        fields: {textUthmani: true},
    });
    res.json(verse);
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
};

exports.getbyRange = async (req, res) => {
    try {
        const {from, to} = req.query;
        const verses = await client.content.v4.verses.byRange(from, to, {
          tafsirs: [171],
          translations: [20], 
          perPage: 286,
          fields: {textUthmani: true},
        });
        res.json(verses);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};