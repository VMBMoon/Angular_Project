import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',

  template: `

<style>
  section {
    position: fixed;
    background: rgb(111,149,237);
    background: linear-gradient(145deg, #c65360 10%, #CB152B 51.2%, #0c0c0f 10%, #2B2C4E 51.3%);
    min-height: calc(100vh - 56px - 0px);
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
    /*margin-top: 11em;*/
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    min-height: calc(100vh - 56px - 0px);

  }
  div.text {
    /*background: red;*/
    display: flex;
    flex-direction:column;
    justify-content: center;
    color: white;
    width: 400px;
    height: 300px;


  }

  div p{
    margin-top: -10px;
    font-size: medium;
  }
  div p.version{
    margin-top: 30px;
  }

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  img{
    height: 200px;
    width: 200px;
    margin: auto;
  }
  div.container {
    margin: auto;
    /*margin-top: 6em;*/
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  div.text {
   margin: auto;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  img{
    height: 200px;
    width: 200px;
    margin: auto;
  }
  div.container {
    margin: auto;
    /*margin-top: 6em;*/


  }
  div.text {
   margin: auto;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  img{
    height: 230px;
    width: 230px;
    margin: auto;
  }
  div.container {
    margin: auto;
    /*margin-top: 6em;*/


  }
  div.text {
   margin: auto;
   width: 500px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  img{
    height: 280px;
    width: 280px;
    margin: auto;
  }
  div.container {
    margin: auto;
    /*margin-top: 13em;*/

  }
  div.text {
   margin: auto;
   margin-left: -2em;
   margin-right: 10em;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  div.container {
    /*margin-top: 13em;*/
  }
  img{
    height: 300px;
    width: 300px;

  }
  div.text {
   margin: auto;
   margin-left: -0.5em;
   margin-right: 15em;
  }

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
