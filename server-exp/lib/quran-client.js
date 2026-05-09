const { QuranClient, Language } = require('@quranjs/api');
const { createServerClient } = require('@quranjs/api/server')

const client = createServerClient({
  clientId: process.env.QURAN_CLIENT_ID,
  clientSecret: process.env.QURAN_CLIENT_SECRET,
});

// Initialize the client
// const client = new QuranClient({
//   clientId: process.env.QURAN_CLIENT_ID,
//   clientSecret: process.env.QURAN_CLIENT_SECRET,
//   defaults: {
//     language: Language.ENGLISH,
//   },
// });

module.exports = client;