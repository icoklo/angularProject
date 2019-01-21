import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksShowComponent } from './bookmarks-show.component';

describe('BookmarksShowComponent', () => {
  let component: BookmarksShowComponent;
  let fixture: ComponentFixture<BookmarksShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
