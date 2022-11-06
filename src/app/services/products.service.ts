import { Injectable } from '@angular/core';
import { Product } from '../products/shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor() { }

  public saveData(data: Product){
    localStorage.setItem(data.name.toString(), JSON.stringify(data));
  }

  public list(): Array<Product>{
    const products: Product[] = [];
    console.log(localStorage.length)
    for(let i = 0; i < localStorage.length; i++){
      products.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }
    return products;
  }
}
