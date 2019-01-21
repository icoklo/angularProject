import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-bookmarks-create',
  templateUrl: './bookmarks-create.component.html',
  styleUrls: ['./bookmarks-create.component.css']
})
export class BookmarksCreateComponent implements OnInit {

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit() {
  }

  bookmarkModel = new Bookmark('temp-mail', 'https://temp-mail.org/', 'opis', 1);
  onSubmit(){
        alert("Submit");
        this._enrollmentService.enroll(this.bookmarkModel)
        .subscribe(
            data => console.log('Success!', data),
            error => console.log('Error!', error),
        )
  }

}
