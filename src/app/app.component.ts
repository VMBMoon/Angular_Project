import { Component, Input } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

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
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faGoogle = faGoogle;

  title = 'Angular_Project';

}
