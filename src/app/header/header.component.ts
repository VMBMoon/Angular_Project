import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<style>
  a.nav-link{
    color: #E23237;
    border-radius: 6px;
  }
  a.disabled{
    color: gray;
  }
  a.nav-link:hover{
    background-color: #E23237;
    color: white;
    border-radius: 6px;
  }

</style>
<nav class="navbar sticky-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/angular-logo.png" alt="Logo" width="105" height="28" class="d-inline-block align-text-top">
    </a>
     <ul class="nav">
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
          <a class="nav-link" href="Vendas">Vendas</a>
          <a class="nav-link disabled" href="#">Under Maintenance</a>
    </ul>
    </div>
</nav>

  `,

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
