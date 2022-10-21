import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string ="Tamamo no Mae";
  age: number = 1000;
  job = "Shrine Keeper";
  hobbies = ["Walking"," Martial Arts"," Meditation"];

  constructor() { }

  ngOnInit(): void {
  }

}
