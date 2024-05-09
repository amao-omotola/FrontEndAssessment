import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  ACCESS_TOKEN = "access_token";
  constructor(
    private cookie: CookieService,
  ) { }

  saveToken(token:any) {
    console.log(token, "token");
    
    this.cookie.set(this.ACCESS_TOKEN, token.token);
  }
  getToken() {
    return this.cookie.get(this.ACCESS_TOKEN)
  }
  // getUserInfo(): any {
  //   try{
  //     let user = JSON.parse(this.cookie.get('user'))
  //     return user;
  //   } catch (err){
  //     return null;
  //   } 
  // }
  deleteAll() {
    return this.cookie.deleteAll();
  }
}
