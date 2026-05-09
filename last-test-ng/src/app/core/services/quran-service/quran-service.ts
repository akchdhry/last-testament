import { Injectable } from '@angular/core';
import { Language, QuranClient, SearchMode } from "@quranjs/api";

// Initialize the client
const client = new QuranClient({
  clientId: process.env.QURAN_CLIENT_ID!,
  clientSecret: process.env.QURAN_CLIENT_SECRET!,
  defaults: {
    language: Language.ENGLISH,
  },
});

// Fetch all chapters
const chapters = await client.chapters.findAll();

// Get a specific verse
const verse = await client.verses.findByKey("2:255", {
  translations: [20],
  words: true,
});

// Search
const results = await client.search.search("light", {
  mode: SearchMode.Quick,
  language: Language.ENGLISH,
});


@Injectable({
  providedIn: 'root',
})
export class QuranService {}
