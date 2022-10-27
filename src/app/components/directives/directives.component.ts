import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 36;
  font = 'Times New Roman';
  color = 'red';
  background = 'darkgrey';
  padding = 0.5;
  border = 8;
  margin = 'auto';
  width = 'fit-content';
  mb = 0.5;

  classes = ['green-title', 'small-title'];

  underline = "underline-title";

  constructor() { }

  ngOnInit(): void {
  }

}
