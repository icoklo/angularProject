import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksCreateComponent } from './bookmarks-create.component';

describe('BookmarksCreateComponent', () => {
  let component: BookmarksCreateComponent;
  let fixture: ComponentFixture<BookmarksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
