import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  userAuthentification(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqHeader = new HttpHeaders({'Content-type': 'application/x-www-urlencoded'});

    return this.http.post('api/token', data, {headers: reqHeader});
  }
}
