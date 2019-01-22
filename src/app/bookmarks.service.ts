import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBookmark } from './ibookmark';
import { Bookmark } from './bookmark';

@Injectable({
    providedIn: 'root'
})
export class BookmarksService {

    url = '';
    constructor(private http: HttpClient) { }

    getBookmarks(): Observable<IBookmark[]> {
        this.url = environment.apiUrl + '/bookmarks/all';
        return this.http.get<IBookmark[]>(this.url);
    }

    storeBookmark(bookmark: Bookmark) {
        this.url = environment.apiUrl + '/bookmarks/store';
        return this.http.post<any>(this.url, bookmark);
    }

    getBookmark(id: number): Observable<IBookmark> {
        this.url = environment.apiUrl + '/bookmarks/edit/' + id;
        return this.http.get<Bookmark>(this.url);
    }

    updateBookmark(id: number, bookmark: Bookmark) {
        this.url = environment.apiUrl + '/bookmarks/edit/' + id;
        return this.http.put(this.url, bookmark);
    }

    deleteBookmark(id: number) {
        this.url = environment.apiUrl + '/bookmarks/delete/' + id;
        return this.http.delete(this.url);
    }
}
