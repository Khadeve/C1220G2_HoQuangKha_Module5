import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8080/customers';
  }

  onGet(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  searchCustomer(term: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.customersUrl}/?name=${term}`);
  }

  addNewCustomer(newCustomer: Customer): Observable<Customer> {
    newCustomer.id = newCustomer.id.slice(3);
    return this.http.post<Customer>(this.customersUrl, newCustomer);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl + '/' + id);
  }

  updateCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.customersUrl + '/' + newCustomer.id, newCustomer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(this.customersUrl + '/' + id);
  }

  private _listener: Subject<any> = new Subject<any>();
  listen(): Observable<any>{
    return this._listener.asObservable();
  }

  // filter as an event of _listener.
  filter(filterBy: string): void {
    this._listener.next(filterBy);
  }
}
