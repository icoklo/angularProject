import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email = '';
    password = '';
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit() {

        this.authService.login(this.email, this.password)
            .subscribe(   
                data => {
                    console.log('Success!', data);
                    if(data.status == 'success')
                    {
                        alert(data.message);
                        this.router.navigate(['/bookmarks/show']);
                    }
                    else 
                    {
                        alert(data.message);
                    }
                },
                error => console.log('Error!', error),
            );
    }
}