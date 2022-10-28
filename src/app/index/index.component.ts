import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',

  template: `

<style>
  section {
    margin: auto;
    position: fixed;
    background: rgb(111,149,237);
    background: linear-gradient(146.5deg, rgba(111,149,237,1) 10%, rgba(43,101,236,1) 56.2%, rgba(255,255,255,1) 56.3%);
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
  div.container {
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
  <div class="container">
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
