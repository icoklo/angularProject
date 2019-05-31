import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    url = '';
    constructor(private http: HttpClient) { }

    login(email: string, password: string)
    {
        this.url = environment.apiUrl + '/login';
        let data = {
            email: email,
            password: password
        };

        return this.http.post<any>(this.url, data);
    }
}
