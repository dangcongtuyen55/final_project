import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AlertService } from 'ngx-alerts';
import { JwtHelperService } from "@auth0/angular-jwt";  
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl ="http://localhost:5500/api/auth/";
  helper = new JwtHelperService();
  decodedToken : any = null;

  constructor(private http: HttpClient,private alertService: AlertService) { }

  login(model:any) {
    return this.http.post(this.authUrl+'login', model).pipe(
        map((response:any) =>{

          
          const user = response;
          if(user.status = 'success'){
            console.log(user);
            localStorage.setItem('token', user.data.token);
             this.decodedToken = this.helper.decodeToken(user.data.token);
            localStorage.setItem('isAdmin', user.data.role)
            console.log(this.decodedToken);
          } 
          
        })
    )
  }

  logOut(){
    localStorage.removeItem('token');
    this.alertService.success("Logout Success!!!")
    this.decodedToken = this.helper.decodeToken('');
    console.log(this.decodedToken);
  }

  register(model:any) {

    let headers = new HttpHeaders({

    })
    let options ={headers: headers};
    return this.http.post(this.authUrl + 'register',model, options)
  }

  loggedIn():boolean {
    const token = localStorage.getItem('token');
    //return this.helper.getTokenExpirationDate('token');
    return !this.helper.isTokenExpired('token');
  }



}
