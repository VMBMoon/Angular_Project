import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [DatePipe],
})

export class CurrencyComponent implements OnInit {
  public result!: string;
  currencyForm!: FormGroup;
  public fromCur!: string;
  public toCur!: string;
  list: any[] = [];
  currentDate = new Date();
  faArrowRightArrowLeft = faArrowRightArrowLeft;


  addHistory() {
    this.list.push({
      id: this.list.length,
      value: this.result,
      from: this.fromCur,
      to: this.toCur,
    });
    console.warn(this.list);
  }

  moneyView: { [key: string]: string } = {
    USD: 'Dollar',
    EUR: 'Euro',
    BRL: 'Real',
    BTC: 'Bitcoin',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.currencyForm = this.formBuilder.group({
      moneyValue: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      firstValue: [''],
      currency: [''],
    });
  }

  converter() {
    const calc = this.currencyForm.getRawValue() as CurrencyModel;
    if (calc.firstValue === 'USD' && calc.currency === 'BRL') {
      this.fromCur = 'USD';
      this.toCur = 'BRL';
      this.USDtoBRL(calc.moneyValue);
    } else if (calc.firstValue === 'USD' && calc.currency === 'EUR') {
      this.fromCur = 'USD';
      this.toCur = 'EUR';
      this.USDtoEUR(calc.moneyValue);
    } else if (calc.firstValue === 'USD' && calc.currency === 'USD') {
      this.fromCur = 'USD';
      this.toCur = 'USD';
      this.USDtoUSD(calc.moneyValue);
    } else if (calc.firstValue === 'USD' && calc.currency === 'BTC') {
      this.fromCur = 'USD';
      this.toCur = 'BTC';
      this.USDtoBTC(calc.moneyValue);
    } else if (calc.firstValue === 'EUR' && calc.currency === 'BRL') {
      this.fromCur = 'EUR';
      this.toCur = 'BRL';
      this.EURtoBRL(calc.moneyValue);
    } else if (calc.firstValue === 'EUR' && calc.currency === 'EUR') {
      this.fromCur = 'EUR';
      this.toCur = 'EUR';
      this.EURtoEUR(calc.moneyValue);
    } else if (calc.firstValue === 'EUR' && calc.currency === 'USD') {
      this.fromCur = 'EUR';
      this.toCur = 'USD';
      this.EURtoUSD(calc.moneyValue);
    } else if (calc.firstValue === 'EUR' && calc.currency === 'BTC') {
      this.fromCur = 'EUR';
      this.toCur = 'BTC';
      this.EURtoBTC(calc.moneyValue);
    } else if (calc.firstValue === 'BRL' && calc.currency === 'EUR') {
      this.fromCur = 'BRL';
      this.toCur = 'EUR';
      this.BRLtoEUR(calc.moneyValue);
    } else if (calc.firstValue === 'BRL' && calc.currency === 'USD') {
      this.fromCur = 'BRL';
      this.toCur = 'USD';
      this.BRLtoUSD(calc.moneyValue);
    } else if (calc.firstValue === 'BRL' && calc.currency === 'BRL') {
      this.fromCur = 'BRL';
      this.toCur = 'BRL';
      this.BRLtoBRL(calc.moneyValue);
    } else if (calc.firstValue === 'BRL' && calc.currency === 'BTC') {
      this.fromCur = 'BRL';
      this.toCur = 'BTC';
      this.BRLtoBTC(calc.moneyValue);
    } else if (calc.firstValue === 'BTC' && calc.currency === 'BTC') {
      this.fromCur = 'BTC';
      this.toCur = 'BTC';
      this.BTCtoBTC(calc.moneyValue);
    } else if (calc.firstValue === 'BTC' && calc.currency === 'USD') {
      this.fromCur = 'BTC';
      this.toCur = 'USD';
      this.BTCtoUSD(calc.moneyValue);
    } else if (calc.firstValue === 'BTC' && calc.currency === 'EUR') {
      this.fromCur = 'BTC';
      this.toCur = 'EUR';
      this.BTCtoEUR(calc.moneyValue);
    } else if (calc.firstValue === 'BTC' && calc.currency === 'BRL') {
      this.fromCur = 'BTC';
      this.toCur = 'BRL';
      this.BTCtoBRL(calc.moneyValue);
    }
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

  USDtoBRL(money: number): void {
    this.result = Number(money * 5.34).toFixed(2) + ' R$';
  }
  USDtoEUR(money: number): void {
    this.result = Number(money * 1).toFixed(2) + ' €';
  }
  USDtoBTC(money: number): void {
    this.result = Number(money / 20588).toFixed(5) + ' ₿';
  }
  USDtoUSD(money: number): void {
    this.result = Number(money / 1).toFixed(2) + ' $';
  }
  BRLtoBRL(money: number): void {
    this.result = Number(money / 1).toFixed(2) + ' R$';
  }
  BRLtoUSD(money: number): void {
    this.result = Number(money / 5.34).toFixed(2) + ' $';
  }
  BRLtoEUR(money: number): void {
    this.result = Number(money / 5.33).toFixed(2) + ' €';
  }
  BRLtoBTC(money: number): void {
    this.result = Number(money / 108968).toFixed(5) + ' ₿';
  }
  EURtoBRL(money: number): void {
    this.result = Number(money * 5.33).toFixed(2) + ' R$';
  }
  EURtoEUR(money: number): void {
    this.result = Number(money * 1).toFixed(2) + ' €';
  }
  EURtoUSD(money: number): void {
    this.result = Number(money * 1).toFixed(2) + ' $';
  }
  EURtoBTC(money: number): void {
    this.result = Number(money / 20661).toFixed(5) + ' ₿';
  }
  BTCtoUSD(money: number): void {
    this.result = Number(money * 20588).toFixed(2) + ' $';
  }
  BTCtoEUR(money: number): void {
    this.result = Number(money * 20661).toFixed(2) + ' €';
  }
  BTCtoBRL(money: number): void {
    this.result = Number(money * 108968).toFixed(2) + ' R$';
  }
  BTCtoBTC(money: number): void {
    this.result = Number(money * 1).toFixed(5) + ' ₿';
  }
}
export interface CurrencyModel {
  moneyValue: number;
  firstValue: string;
  currency: string;
}

export interface list {
  id: number;
  value: string;
  from: string;
  to: string;
}
