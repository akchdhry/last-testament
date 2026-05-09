// core/services//chapter-service/chapter-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '@quranjs/api';
import { environment } from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ChapterService {
  private baseUrl = `${environment.apiUrl}/chapters`; // → http://localhost:3000/api/chapters

  constructor(private http: HttpClient) {}

  getAll(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.baseUrl);
  }

  getById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.baseUrl}/${id}`);
  }
}