import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',

  template: `

<style>
  section {
    position: fixed;
    background: rgb(111,149,237);
    background: linear-gradient(146.5deg, #c65360 10%, #CB152B 56.2%, #0c0c0f 10%, #2B2C4E 56.3%);
    min-height: calc(100vh - 56px - 150px);
  }

  img{
    height: 300px;
    width: 300px;
    align-self: center;
    /*background-color: black;*/

  }
  div.container {
    /*background-color: pink;*/
    margin: auto;
    margin-top: 12em;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

  }
  div.text {
    /*background: red;*/
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    margin-right: 10em;
    color: white;
    width: 650px;
    height: 300px;

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
    <div class="text">
      <h1><strong> Welcome to Angular </strong></h1>
      <h3>Web Application</h3>
      <p class="version"> Angular 14.2 </p>
      <p> Bootstrap 5.2 </p>
      <p> FontAwesome 6.2 </p>
    </div>
      <img src="../assets/img/angular.png">
  </div>
</section>
  `
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
