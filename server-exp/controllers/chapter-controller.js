const client = require('../lib/quran-client');

exports.getAll = async (req, res) => {
  try {
    const chapters = await client.chapters.findAll();
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
};

exports.getById = async (req, res) => {
  try {
    const chapter = await client.chapters.findById(req.params.id)
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chapter: ' + err.message });
  }
};