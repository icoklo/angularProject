import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookmarksShowComponent } from './bookmarks-show/bookmarks-show.component';
import { BookmarksCreateComponent } from './bookmarks-create/bookmarks-create.component';
import { BookmarksEditComponent } from './bookmarks-edit/bookmarks-edit.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'bookmarks/show', component: BookmarksShowComponent },
    { path: 'bookmarks/create', component: BookmarksCreateComponent },
    { path: 'bookmarks/edit/:id', component: BookmarksEditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
