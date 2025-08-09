import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://34.172.54.217:8080';

  constructor(private http: HttpClient) {}

  userLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }

  adminLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/login`, data);
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/resetpassword`, data);
  }
}
