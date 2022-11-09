import { Product } from './../shared/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

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

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private productsService: ProductsService, private _snackBar: MatSnackBar,
    ) {}

  ngOnInit(): void {
    this.products = this.productsService.list();
    this.data = this.productsService.recover(this.id);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }

  remove(id: any) {
    this.productsService.remove(id);
    this.productsService.refresh();
    this.openSnackBar('Delete Sucess', 'X');

  }

  clear() {
    this.productsService.clear();
    this.productsService.refresh();
    this.openSnackBar('Clear Sucess', 'X');
  }
}
