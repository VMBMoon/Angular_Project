import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  someText: string = "the quick fox jumps over the lazy dog";

  today = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
