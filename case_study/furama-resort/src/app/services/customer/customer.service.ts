import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl: string = 'http://localhost:3000/customerList';

  constructor(private http: HttpClient) {

  }

  onGet(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  addNewCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, newCustomer);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl + '/' + id);
  }

  updateCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.customersUrl + '/' + newCustomer.id, newCustomer);
  }
}
