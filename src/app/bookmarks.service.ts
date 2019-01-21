import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBookmark } from './ibookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

    url = environment.apiUrl + '/bookmarks/all'
  constructor(private http: HttpClient) { }

  getBookmarks(): Observable<IBookmark[]>{
      return this.http.get<IBookmark[]>(this.url);
  }
}
