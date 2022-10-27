import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
