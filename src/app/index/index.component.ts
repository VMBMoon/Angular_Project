import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',

  template: `

<style>
  section {
    position: fixed;
    background: linear-gradient(150deg, #2B65EC 54.9%, #fff 55%);
    min-height: calc(100vh - 56px - 150px);
  }
  img {
    margin: auto;
    height: 300px;
    width: 300px;
    position: fixed;
    right: 0;
    left: 500px;
    top: 250px;

  }
  div {
    margin: auto;
    position: fixed;
    right: 600px;
    left: 0px;
    top: 300px;
    color: white;
  }

  div p{
    margin-top: -10px;
    font-size: medium;
  }
  div p.version{
    margin-top: 30px;
  }

</style>
<section class="container-fluid">
  <div>
    <h1><strong> Welcome to Angular </strong></h1>
    <h3>Web Application</h3>
    <p class="version"> Angular 14.2 </p>
    <p> Bootstrap 5.2 </p>
    <p> FontAwesome 6.2 </p>
  </div>
    <img src="../assets/img/angular.png">
</section>
  `
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
