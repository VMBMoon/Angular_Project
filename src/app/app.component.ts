import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'ShrineKeeper';

  userData = {
    email: 'kitsune@email.com',
    role: 'admin',
  };

  title = 'Angular_Project';
}
