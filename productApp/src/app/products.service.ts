import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName: any,Categories: any,Tags: any, Price: any,Quantity: any) {
    const obj = {
      ProductName,
      Categories,
      Tags,
      Price,
      Quantity,
      Status:true
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  updateProducts(id: any,ProductName: any, Categories: any, Tags: any, Price: any, Quantity: any,Status: any) {
    const obj = {
      ProductName,
      Categories,
      Tags,
      Price,
      Quantity,
      Status
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log(res));
  }
}
