import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<style>
  .navbar {
  background-color: #151B8D;
  height: min-content;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}

a.nav-link{
  color: #fff;
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
ul.nav > a.nav-link:focus {
  color:#E23237;
}
ul.nav > a.nav-link:focus:hover {
  color: white;

}
</style>

<nav class="navbar sticky-top navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/angular-logo.png" alt="Logo" width="105" height="28" class="d-inline-block align-text-top">
    </a>
     <ul class="nav">
          <a class="nav-link" href="#/Home">Study Project</a>
          <a class="nav-link" href="#/Vendas">Sales</a>
          <a class="nav-link" href="#/Conversor">Currency</a>
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
