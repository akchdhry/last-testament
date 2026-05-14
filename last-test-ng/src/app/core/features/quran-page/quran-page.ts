import { Component, inject } from '@angular/core';
import { ChapterService } from '../../services/chapter-service/chapter-service';
import { VerseService } from '../../services/verse-service/verse-service';
import { Chapter, Verse } from '@quranjs/api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { filter, Subject } from 'rxjs';

@Component({
  selector: 'app-quran-page',
  imports: [ReactiveFormsModule],
  templateUrl: './quran-page.html',
  styleUrl: './quran-page.scss',
})
export class QuranPage {
  // Chapter Service Functionality
  private chapterService = inject(ChapterService);

  chaptersResource = rxResource({
    stream: () => this.chapterService.getAll()
  });

  chapters = this.chaptersResource.value;   // signal<Chapter[] | undefined>
  chapters_loading = this.chaptersResource.isLoading; // signal<boolean>
  chapters_error = this.chaptersResource.error;       // signal<unknown>

  // Verses Service Functionality
  private verseService = inject(VerseService);

  private keySubmit = new Subject<string>;

  keyControl = new FormControl<string>('1:1-7');
  inputKey = toSignal(this.keySubmit.asObservable(), { initialValue: '1:1-7' });

  submitKey() {
    const val = this.keyControl.value;
    if (val) this.keySubmit.next(val);
  }

  inputToRange(input: string): string[] {
    let [ chapter , verses ] = input.split(':');
    if (input.includes('-')) {
      let [ from , to ] = verses.split('-');
      return [`${chapter}:${from}`, `${chapter}:${to}`]
    } else {
      return [`${chapter}:${verses}`, `${chapter}:${verses}`];
    }

  }

  versesResource = rxResource({
    params: this.inputKey,
    stream: ({ params: key }) => 
      (this.verseService.getByRange(this.inputToRange(key)[0], this.inputToRange(key)[1]))
  });

  verses = this.versesResource.value;
  verses_loading = this.versesResource.isLoading;
  verses_error = this.versesResource.error;

  strip(str: string | undefined): string {
    // create a new div container
    const div = document.createElement('div');

    // assing your HTML to div's innerHTML
    if (str == undefined) return '';
    div.innerHTML = str;

    // get all <a> elements from div
    let elements = div.getElementsByTagName('sup');

    // remove all <a> elements
    while (elements[0] && elements[0].parentNode) {
      elements[0].parentNode.removeChild(elements[0])
    }

    // get div's innerHTML into a new variable
    return div.innerHTML;
  }

  // verse selection
  selectedVerse: Verse | null = null;
  selectVerse(verse: Verse): void {
    if (verse == this.selectedVerse) {
      this.selectedVerse = null;
    } else {
      this.selectedVerse = verse;
    }
  }
  
  highlightVerse(verse: Verse): string {
    if (verse == this.selectedVerse) {
      return 'background-color: #b6d7a8;';
    } else return '';
  }

}
