import { Component, inject } from '@angular/core';
import { ChapterService } from '../../services/chapter-service/chapter-service';
import { Chapter } from '@quranjs/api';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-quran-page',
  imports: [],
  templateUrl: './quran-page.html',
  styleUrl: './quran-page.scss',
})
export class QuranPage {

  private chapterService = inject(ChapterService);

  chaptersResource = rxResource({
    stream: () => this.chapterService.getAll()
  });

  chapters = this.chaptersResource.value;   // signal<Chapter[] | undefined>
  loading = this.chaptersResource.isLoading; // signal<boolean>
  error = this.chaptersResource.error;       // signal<unknown>
}
