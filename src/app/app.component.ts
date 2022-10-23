import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],

  template: `
  <app-header></app-header>

  <router-outlet>

  <app-footer></app-footer>
`,

})
export class AppComponent {

  title = 'Angular_Project';

}
