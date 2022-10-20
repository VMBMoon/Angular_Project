import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  canShow: boolean = false;
  name: string = 'Dr.No';
  invaded: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  showName(): void {
    this.canShow = !this.canShow;
  }
  fixEvil(): void {
    this.name = 'James Bond';
  }
  invade(): void {
    this.name = 'Dr.No';
  }
}
