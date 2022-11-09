import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';



const routes: Routes = [

  { path: '',
  component: IndexComponent

  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Vendas',
    component: VendedorComponent
  },
  {
    path: 'Conversor',
    component: CurrencyComponent
  },
  {
    path: 'Products',
    component: ProductsFormComponent
  },
  {
    path: 'Products/List',
    component: ProductsListComponent
  },
  {
    path: 'Edit/:id',
    component: EditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
