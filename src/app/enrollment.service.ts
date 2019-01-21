import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bookmark } from './bookmark';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

    _url = environment.apiUrl + '/bookmarks/store'
  constructor(private _http: HttpClient) { }

  enroll(bookmark: Bookmark) {
      return this._http.post<any>(this._url, bookmark);
  }
}
