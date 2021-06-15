import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/productList');
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/productList', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/productList/${id}`);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/productList/${id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/productList/${id}`);
  }
}
