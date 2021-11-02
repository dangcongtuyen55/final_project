
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
export class UserService {

 httpOptions ={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }

  url = "http://localhost:5500/api/auth/"

  users!:User[]

constructor(private http: HttpClient) { }
  getAlls():Observable<User[]>{
    return this.http.get<User[]>(this.url + 'getallusers')
  } 

  deleteUser(id:String){
    return this.http.delete(this.url + id);
    console.log(id);
  }
  
  blockUser(id:String){
    return this.http.patch(this.url + 'block/' +id,null);
  }

  unBlockUser(id:String){
    return this.http.patch(this.url + 'unblock/' + id, null);
  }

}
