import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'brand', 'expire_date', 'category'];


  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit() : void {
    this.products = this.productsService.list();
  }

}
