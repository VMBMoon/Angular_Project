import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  public salarioBase: number = 0;
  public comissao: number = 0;
  public carrosVendidos: number = 0;
  public salarioTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Calcular() {
    this.salarioTotal = this.salarioBase+this.comissao+this.carrosVendidos;
  }

}
