import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BookmarksService } from '../bookmarks.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bookmarks-create',
    templateUrl: './bookmarks-create.component.html',
    styleUrls: ['./bookmarks-create.component.css']
})
export class BookmarksCreateComponent implements OnInit {

    bookmarkModel = new Bookmark('', 'https://temp-mail.org/', '', 1);
    constructor(private bookmarkService: BookmarksService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit() {
        alert("Submit");

        this.bookmarkService.storeBookmark(this.bookmarkModel)
            .subscribe(
                data => {
                    console.log('Success!', data);
                    this.router.navigate(['/bookmarks/show']);
                },
                error => console.log('Error!', error),
            )
    }

}
