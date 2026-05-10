import { Component, inject } from '@angular/core';
import { ChapterService } from '../../services/chapter-service/chapter-service';
import { VerseService } from '../../services/verse-service/verse-service';
import { Chapter } from '@quranjs/api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

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

  chapterControl = new FormControl<number>(1);
  selectedChapterId = toSignal(
    this.chapterControl.valueChanges.pipe(
      filter((id): id is number => id !== null)
    ),
    { initialValue: 1 }
  );

  versesResource = rxResource({
    params: this.selectedChapterId,
    stream: ({ params: chapterId }) => this.verseService.getByChapter(chapterId)
  });

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

  verses = this.versesResource.value;
  verses_loading = this.versesResource.isLoading;
  verses_error = this.versesResource.error;
}
