import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string ="Hisui Kitsune";
  age: number = 1000;
  job = "Shrine Keeper";
  hobbies = ["Walking"," Kung Fu"," Meditation"];

  constructor() { }

  ngOnInit(): void {
  }

}
