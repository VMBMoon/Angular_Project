import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatOption } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    VendedorComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VendasComponent,
    IndexComponent,
    CurrencyComponent,
    ConversorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  exports: [MatButtonModule, MatButtonToggleModule],
  providers: [
    HttpClientModule,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
