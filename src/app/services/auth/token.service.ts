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
    
    this.cookie.set(this.ACCESS_TOKEN, token.token);
  }
  getToken() {
    return this.cookie.get(this.ACCESS_TOKEN)
  }
  deleteAll() {
    return this.cookie.deleteAll();
  }
}
