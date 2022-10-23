import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Vendas',
    component: VendedorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
