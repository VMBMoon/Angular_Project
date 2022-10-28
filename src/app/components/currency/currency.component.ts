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
  result!: number | string;
  currencyForm!: FormGroup;


  moneyView: { [key: string]: string } = {
    'USD': 'Dollar',
    'EUR': 'Euro',
    'BRL': 'Real',
    'BTC': 'Bitcoin',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.currencyForm = this.formBuilder.group({
      moneyValue: ['', [Validators.required, Validators.pattern(/^[0-9]/)]],
      currency: [''],
    });
  }

  converter() {
    const calc = this.currencyForm.getRawValue() as CurrencyModel;
    const conversions = {
      "USD": (num1: number, num2: number = 5.34) => num1 / num2,
      "EUR": (num1: number, num2: number = 5.33) => num1 / num2,
      "BRL": (num1: number, num2: number = 1) => num1 * num2,
      "BTC": (num1: number, num2: number = 108900) => num1 / num2,

    };/*
    this.result = conversions[calc.currency as keyof typeof conversions](
      calc.moneyValue,
    );}}
    else if(this.currencyForm.getRawValue() == 'USD'){
       const conversions = {
         "USD": (num1: number, num2: number = 1) => num1 * num2,
         "EUR": (num1: number, num2: number = 0.1) => num1 * num2,
         "BRL": (num1: number, num2: number = 5.34) => num1 / num2,
         "BTC": (num1: number, num2: number = 20496 ) => num1 / num2
       };
       this.result = conversions[calc.currency as keyof typeof conversions](
         calc.moneyValue,
       );
      }
    else if(this.currencyForm.getRawValue() == 'EUR'){
      const conversions = {
        "USD": (num1: number, num2: number = 1) => num1 * num2,
        "EUR": (num1: number, num2: number = 1) => num1 * num2,
        "BRL": (num1: number, num2: number = 5.33) => num1 * num2,
        "BTC": (num1: number, num2: number = 20.575 ) => num1 / num2,

      };
      this.result = conversions[calc.currency as keyof typeof conversions](
        calc.moneyValue,
      );
    }
    else if(this.currencyForm.getRawValue() == 'BTC'){
      const conversions = {
        "USD": (num1: number, num2: number = 5.34) => num1 / num2,
        "EUR": (num1: number, num2: number = 5.33) => num1 / num2,
        "BRL": (num1: number, num2: number = 1) => num1 * num2,
        "BTC": (num1: number, num2: number = 108900 ) => num1 / num2,

      };*/
      this.result = conversions[calc.currency as keyof typeof conversions](
        calc.moneyValue,
      );
  }


  get moneyValue() {
    return this.currencyForm.get('moneyValue')!;
  }
  get currency() {
    return this.currencyForm.get('currency')!;
  }
}

export interface CurrencyModel {
  moneyValue: number;
  currency: string;
}
