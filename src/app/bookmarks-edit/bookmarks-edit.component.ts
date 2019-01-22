import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from '../bookmark';

@Component({
    selector: 'app-bookmarks-edit',
    templateUrl: './bookmarks-edit.component.html',
    styleUrls: ['./bookmarks-edit.component.css']
})
export class BookmarksEditComponent implements OnInit {

    bookmarkModel = new Bookmark('', '', '', 1);
    constructor(private route: ActivatedRoute, private bookmarkService: BookmarksService,
        private router: Router) { }

    ngOnInit() {

        this.bookmarkService.getBookmark(this.route.snapshot.params['id'])
            .subscribe(
                data => this.bookmarkModel = data,
                error => console.log('Error!', error),
            )
    }

    onSubmit() {
        alert("Submit");

        this.bookmarkService.updateBookmark(this.route.snapshot.params['id'], this.bookmarkModel)
            .subscribe(
                data => {
                    console.log('Success!', data);
                    this.router.navigate(['/bookmarks/show']);
                },
                error => console.log('Error!', error),
            )
    }

}
