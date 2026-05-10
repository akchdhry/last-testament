// core/services/verse.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Verse } from '@quranjs/api';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class VerseService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/verses`;

  getByChapter(chapterId: number): Observable<Verse[]> {
    return this.http.get<Verse[]>(`${this.baseUrl}/chapter/${chapterId}`);
  }

  getByKey(key: String): Observable<Verse> {
    return this.http.get<Verse>(`${this.baseUrl}/key/${key}`);
  }
}