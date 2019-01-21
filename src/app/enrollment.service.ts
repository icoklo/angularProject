import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bookmark } from './bookmark';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

    url = environment.apiUrl + '/bookmarks/store'
  constructor(private http: HttpClient) { }

  enroll(bookmark: Bookmark) {
      return this.http.post<any>(this.url, bookmark);
  }
}
