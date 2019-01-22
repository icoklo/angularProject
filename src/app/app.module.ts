import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookmarksShowComponent } from './bookmarks-show/bookmarks-show.component';
import { BookmarksCreateComponent } from './bookmarks-create/bookmarks-create.component';
import { FormsModule } from '@angular/forms';
import { BookmarksService } from './bookmarks.service';
import { BookmarksEditComponent } from './bookmarks-edit/bookmarks-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookmarksShowComponent,
    BookmarksCreateComponent,
    BookmarksEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ BookmarksService ],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}
