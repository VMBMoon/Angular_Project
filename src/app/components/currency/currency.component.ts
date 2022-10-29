import { Component, OnInit } from '@angular/core';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  result!: number | string ;
  currencyForm!: FormGroup;



  moneyView: { [key: string]: string } = {
    'USD': 'Dollar',
    'EUR': 'Euro',
    'BRL': 'Real',
    'BTC': 'Bitcoin',
  };

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.currencyForm = this.formBuilder.group({
      moneyValue: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      firstValue: [''],
      currency: [''],
    });
  }

  converter() {
    const calc = this.currencyForm.getRawValue() as CurrencyModel;
  if (calc.firstValue === 'USD' && calc.currency === 'BRL') {this.USDtoBRL(calc.moneyValue);}
  else if (calc.firstValue === 'USD' && calc.currency === 'EUR') {this.USDtoEUR(calc.moneyValue);}
  else if (calc.firstValue === 'USD' && calc.currency === 'USD') {this.USDtoUSD(calc.moneyValue);}
  else if (calc.firstValue === 'USD' && calc.currency === 'BTC') {this.USDtoBTC(calc.moneyValue);}
  else if (calc.firstValue === 'EUR' && calc.currency === 'BRL') {this.EURtoBRL(calc.moneyValue);}
  else if (calc.firstValue === 'EUR' && calc.currency === 'EUR') {this.EURtoEUR(calc.moneyValue);}
  else if (calc.firstValue === 'EUR' && calc.currency === 'USD') {this.EURtoUSD(calc.moneyValue);}
  else if (calc.firstValue === 'EUR' && calc.currency === 'BTC') {this.EURtoBTC(calc.moneyValue);}
  else if (calc.firstValue === 'BRL' && calc.currency === 'EUR') {this.BRLtoEUR(calc.moneyValue);}
  else if (calc.firstValue === 'BRL' && calc.currency === 'USD') {this.BRLtoUSD(calc.moneyValue);}
  else if (calc.firstValue === 'BRL' && calc.currency === 'BRL') {this.BRLtoBRL(calc.moneyValue);}
  else if (calc.firstValue === 'BRL' && calc.currency === 'BTC') {this.BRLtoBTC(calc.moneyValue);}
  else if (calc.firstValue === 'BTC' && calc.currency === 'BTC') {this.BTCtoBTC(calc.moneyValue);}
  else if (calc.firstValue === 'BTC' && calc.currency === 'USD') {this.BTCtoUSD(calc.moneyValue);}
  else if (calc.firstValue === 'BTC' && calc.currency === 'EUR') {this.BTCtoEUR(calc.moneyValue);}
  else if (calc.firstValue === 'BTC' && calc.currency === 'BRL') {this.BTCtoBRL(calc.moneyValue);}

  }

  get moneyValue() {
    return this.currencyForm.get('moneyValue')!;
  }
  get currency() {
    return this.currencyForm.get('currency')!;
  }
  get firstValue() {
    return this.currencyForm.get('firstValue')!;
  }


  USDtoBRL(money:number): void{this.result = (Number(money * 5.34).toFixed(2))  + "R$";}
  USDtoEUR(money:number): void{this.result = (Number(money *    1 ).toFixed(2))  + "€" ;}
  USDtoBTC(money:number): void{this.result = (Number(money / 20588).toFixed(5))  + "₿" ;}
  USDtoUSD(money:number): void{this.result = (Number(money /    1 ).toFixed(2))  + "$" ;}
  BRLtoBRL(money:number): void{this.result = (Number(money /    1 ).toFixed(2))  + "R$";}
  BRLtoUSD(money:number): void{this.result = (Number(money / 5.34 ).toFixed(2))  + "$" ;}
  BRLtoEUR(money:number): void{this.result = (Number(money / 5.33 ).toFixed(2))  + "€" ;}
  BRLtoBTC(money:number): void{this.result = (Number(money / 108968).toFixed(5)) + "₿" ;}
  EURtoBRL(money:number): void{this.result = (Number(money * 5.33 ).toFixed(2))  + "R$";}
  EURtoEUR(money:number): void{this.result = (Number(money *    1 ).toFixed(2))  + "€" ;}
  EURtoUSD(money:number): void{this.result = (Number(money *    1 ).toFixed(2))  + "$" ;}
  EURtoBTC(money:number): void{this.result = (Number(money / 20661).toFixed(5))  + "₿" ;}
  BTCtoUSD(money:number): void{this.result = (Number(money * 20588).toFixed(2))  + "$" ;}
  BTCtoEUR(money:number): void{this.result = (Number(money * 20661).toFixed(2))  + "€" ;}
  BTCtoBRL(money:number): void{this.result = (Number(money * 108968).toFixed(2)) + "R$";}
  BTCtoBTC(money:number): void{this.result = (Number(money *     1).toFixed(5))  + "₿" ;}
  }

export interface CurrencyModel {
  moneyValue: number;
  firstValue: string;
  currency: string;
}
