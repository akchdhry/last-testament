const { Language } = require('@quranjs/api');
const client = require('../lib/quran-client');

exports.getAll = async (req, res) => {
  try {
    const chapters = await client.content.v4.chapters.list({
      language: Language.ENGLISH
    });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
};

exports.getById = async (req, res) => {
  try {
    const chapter = await client.content.v4.chapters.get(req.params.id, {
      language: Language.ENGLISH
    });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapter: '});
  }
};