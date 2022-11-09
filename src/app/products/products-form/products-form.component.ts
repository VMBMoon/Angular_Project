import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  public data!: Product;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private productsService: ProductsService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.data = new Product();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }

  public saveData(form: NgForm) {
    if (form.valid) {
      this.productsService.saveData(this.data);
      this.openSnackBar('Registration Sucess', 'X');
      this.router.navigate(['Products/List']);
    } else this.openSnackBar('Registration Failed', 'X');
  }

}
