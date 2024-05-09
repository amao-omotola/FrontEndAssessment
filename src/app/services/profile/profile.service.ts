import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environment/environment';
import { map } from 'rxjs';

const api = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(page:any){
    return this.http
    .get<any>(`${api}api/users?page=${page}`)
  }

  getUser(id:any){
    return this.http
    .get<any>(`${api}api/users/${id}`)
  }
  updateUser(id:any,data:any){
    return this.http
    .put<any>(`${api}api/users/${id}`, {name: data})
  }
}
