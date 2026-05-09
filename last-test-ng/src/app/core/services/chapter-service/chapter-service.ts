// core/services/chapter.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '@quranjs/api';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChapterService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/chapters`;

  getAll(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.baseUrl);
  }

  getById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.baseUrl}/${id}`);
  }
}