import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLs } from '../config/urls';
import { Employee } from '../models/employee.model';
import { Utils } from '../utilities/utils';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Employee[]> {
    const url = URLs.EMPLOYEES_ENDPOINT;
    return this.httpClient.get<Employee[]>(url, { headers: Utils.getHttpHeaders() });
  }

  get(id: number): Observable<Employee> {
    const url = `${URLs.EMPLOYEES_ENDPOINT}/${id}`;
    return this.httpClient.get<Employee>(url, { headers: Utils.getHttpHeaders() });
  }

  save(employee: Employee): Observable<Employee> {
    const url = URLs.EMPLOYEES_ENDPOINT;
    return this.httpClient.post<Employee>(url, employee, { headers: Utils.getHttpHeaders() });
  }

  update(employee: Employee): Observable<Employee> {
    const url = `${URLs.EMPLOYEES_ENDPOINT}/${employee.id}`;
    return this.httpClient.put<Employee>(url, employee, { headers: Utils.getHttpHeaders() });
  }

  delete(id: number): Observable<boolean> {
    const url = `${URLs.EMPLOYEES_ENDPOINT}/${id}`;
    return this.httpClient.delete<boolean>(url, { headers: Utils.getHttpHeaders() });
  }
}
