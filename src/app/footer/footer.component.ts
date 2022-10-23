import { Component, OnInit } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  template: `


<footer class="footer bg-light text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Google -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #dd4b39;"
        href="#!"
        role="button"
        ><fa-icon [icon]="faGoogle"></fa-icon></a>
      <!-- Linkedin -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #0082ca;"
        href="#!"
        role="button"
        ><fa-icon [icon]="faLinkedinIn"></fa-icon></a>
      <!-- Github -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #333333;"
        href="#!"
        role="button"
        ><fa-icon [icon]="faGithub"></fa-icon></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
   Made With Angular © 2022
  </div>
  <!-- Copyright -->
</footer>
<!-- End of .container -->
`,
})
export class FooterComponent implements OnInit {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faGoogle = faGoogle;

  constructor() { }

  ngOnInit(): void {
  }

}
