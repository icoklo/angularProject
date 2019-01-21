import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'app-bookmarks-show',
  templateUrl: './bookmarks-show.component.html',
  styleUrls: ['./bookmarks-show.component.css']
})
export class BookmarksShowComponent implements OnInit {

    public bookmarks = [];
  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {
    this.bookmarksService.getBookmarks()
        .subscribe(data => this.bookmarks = data);
  }

}
