import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public data!: Product;
  private id: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private productsService: ProductsService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((parameters) => {
      console.log(parameters);
      this.id = parameters['id'];
    });
  }

  ngOnInit(): void {
    this.data = this.productsService.recover(this.id);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  public saveData(form: NgForm) {
    if (form.valid) {
      this.productsService.saveData(this.data);
      this.openSnackBar('Product Edited', 'X');
      this.router.navigate(['Products/List']);
    } else this.openSnackBar('Edit Failed', 'X');
  }
}
