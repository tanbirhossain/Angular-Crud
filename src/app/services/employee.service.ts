
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../models/config';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee) {
    console.log("create sevice model:", employee);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee>(baseUrl + '/api/employees', employee, httpOptions);
  }

}
