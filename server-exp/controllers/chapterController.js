import { Language, QuranClient } from "@quranjs/api";

// Initialize the client
const client = new QuranClient({
  clientId: process.env.QURAN_CLIENT_ID,
  clientSecret: process.env.QURAN_CLIENT_SECRET,
  defaults: {
    language: Language.ENGLISH,
  },
});