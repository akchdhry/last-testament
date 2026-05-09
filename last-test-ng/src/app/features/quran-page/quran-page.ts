import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Language, QuranClient, SearchMode } from "@quranjs/api";

// Initialize the client
const client = new QuranClient({
  clientId: environment.QURAN_CLIENT_ID!,
  clientSecret: environment.QURAN_CLIENT_SECRET!,
  defaults: {
    language: Language.ENGLISH,
  },
});

const verses = await client.verses.findByRange("1:1", "1:7" , {
  translations: [20],
  words: true,
  translationFields: {
    languageName: true,
    resourceName: true,
    verseKey: true,
  },
});

@Component({
  selector: 'app-quran-page',
  imports: [],
  templateUrl: './quran-page.html',
  styleUrl: './quran-page.scss',
})
export class QuranPage {

  verses = verses

}
