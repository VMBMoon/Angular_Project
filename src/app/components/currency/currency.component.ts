import { Component, OnInit } from '@angular/core';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  faArrowRightArrowLeft = faArrowRightArrowLeft;


  constructor() { }

  ngOnInit(): void {}


}
