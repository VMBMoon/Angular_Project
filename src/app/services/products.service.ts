import { Product } from './../products/shared/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:4200/#/Products/List';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.url);
  }

  public saveData(data: Product) {
    localStorage.setItem(data.id!.toString(), JSON.stringify(data));
  }

  public list(): Array<Product> {
    const products: Product[] = [];
    console.log(localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      products.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return products;
  }

  public recover(id: any): Product {
    return JSON.parse(localStorage.getItem(id)!);
  }
  remove(id: any) {
    let products: Product[] = this.list();
    localStorage.getItem(localStorage.key(id)!);
    let index = products.findIndex((e) => e.id === id);
    if (index !== -1) {
      localStorage.removeItem(id)!;
    }
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }
  refresh(): void {
    window.location.reload();
  }

  clear() {
    localStorage.clear();
  }
}
