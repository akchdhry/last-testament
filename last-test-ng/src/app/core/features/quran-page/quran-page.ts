import { Component, OnInit, inject } from '@angular/core';
import { ChapterService } from '../../services/chapter-service/chapter-service';
import { Chapter } from '@quranjs/api';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-quran-page',
  imports: [],
  templateUrl: './quran-page.html',
  styleUrl: './quran-page.scss',
})
export class QuranPage {
  loading = false;
  error: String | null = null;

  private chapterService = inject(ChapterService);
  chapters = toSignal(this.chapterService.getAll(), { initialValue: [] });

}
