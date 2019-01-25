import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bookmarks-show',
    templateUrl: './bookmarks-show.component.html',
    styleUrls: ['./bookmarks-show.component.css']
})
export class BookmarksShowComponent implements OnInit {

    public bookmarks = [];
    constructor(private bookmarksService: BookmarksService, private router: Router) { }

    ngOnInit() {
        this.bookmarksService.getBookmarks()
            .subscribe(data => this.bookmarks = data);
    }

    deleteBookmark(id) {
        //alert("Brisem");

        this.bookmarksService.deleteBookmark(id)
            .subscribe(
                data => {
                    console.log('Success!', data);
                    this.router.navigate(['/bookmarks/show']);
                },
                error => console.log('Error!', error),
            );
    }

}
