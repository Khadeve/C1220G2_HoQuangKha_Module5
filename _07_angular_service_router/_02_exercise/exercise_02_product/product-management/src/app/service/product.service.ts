import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() { }

  getAll(): Product[] {
    return this.products;
  }

  saveProduct(product: Product): void {
    this.products.push(product);
  }

  findById(id: number): Product {
    return this.products.find(element => element.id === id);
  }

  update(product: Product): void {
    let oldProduct = this.findById(product.id);
    oldProduct.name = product.name;
    oldProduct.price = product.price;
    oldProduct.description = product.description;
  }

  deleteById(id: number): void {
    let product = this.findById(id);
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
