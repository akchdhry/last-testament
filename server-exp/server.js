require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chapterRoutes = require('./routes/chapter-routes');
const verseRoutes = require('./routes/verse-routes');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Register route groups
app.use('/api/chapters', chapterRoutes);
app.use('/api/verses', verseRoutes);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Proxy running on port ${process.env.PORT || 3000}`)
);

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    secretLoaded: !!process.env.QURAN_CLIENT_SECRET,
    idLoaded: !!process.env.QURAN_CLIENT_ID
  });
});