import { Product } from './../shared/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'quantity',
    'brand',
    'expire_date',
    'category',
    'actions',
  ];
  products: Product[] = [];

  public data!: Product;
  private id: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.list();
    this.data = this.productsService.recover(this.id);
  }

  remove(id: any) {
    this.productsService.remove(id);
    this.productsService.refresh();
  }
  clear() {
    this.productsService.clear();
    this.productsService.refresh();
  }
}
