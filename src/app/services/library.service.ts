import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  private baseUrl = 'http://34.172.54.217:8080';
  

  constructor(private http: HttpClient) {}
  addStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students/add`, data);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books`);
  }

  getBorrowedBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/borrow`);
  }

  returnBook(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/borrow/return/${id}`, {});
  }

  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dashboard/stats`);
  }
}
