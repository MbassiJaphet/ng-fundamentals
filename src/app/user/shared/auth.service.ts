import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';
import { IUser } from '../user.model';

@Injectable()
export class AuthService {
  currentUser?: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string): Observable<any> {

    let loginInfo = { username: userName, password: password }
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options)
          .pipe(tap<any>( (data) => { this.currentUser = <IUser> data['user']}))
          .pipe(catchError(err => { return of(false); }))
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstname: 'John',
    //   lastname: 'Papa'
    // }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus(): Observable<any> {
    return this.http.get('/api/currentIdentity')
                  .pipe(tap<any>( (data) => {
                    if(data instanceof Object) {
                      this.currentUser = <IUser> data;
                    }
                  }));  
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser!.firstName = firstName
    this.currentUser!.lastName = lastName

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put(`/api/users/${this.currentUser?.id}`, this.currentUser, options);  
  }

  logout() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post(`/api/logout`, {}, options)
                      .pipe(tap<any>(() => {this.currentUser = undefined;}));  
  }
}