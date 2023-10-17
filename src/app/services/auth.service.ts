import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  baseurl ="https://localhost:7114/api/"

  registerUser(user: (string | null | undefined)[]){
    return this.http.post(this.baseurl +'Users/CreateUser', {
      first_name : user[0],
      last_name : user[1],
      email : user[2],
      password : user[3]
    },{
      responseType:'text',
    })
  }
}
