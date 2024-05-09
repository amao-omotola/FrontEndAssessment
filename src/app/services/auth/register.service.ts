import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenService } from './token.service';
import { environment } from '../../../environment/environment';
import { map } from 'rxjs';

const api = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  signUp(signUpForm:any){
    return this.http
    .post<any>(`${api}api/request/`, signUpForm)
  }

  login(loginData:any){
    return this.http
    .post<any>(`${api}api/login/`, loginData)
    .pipe(
      map((data:any)=>{
        this.tokenService.saveToken(data);
      })
    )
  }
}
