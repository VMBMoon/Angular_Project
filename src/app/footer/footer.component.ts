import { Component, OnInit } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  template: `

<style>
a {

  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: transparent;
  margin-left: 0.3em;
  margin-right: 0.3em;
  border: 1px solid #fff;
  color: #fff;
  transition: all 0.3s;
}

a.linkedin {
  padding-left: 11px;
  padding-right: 11px;
}

a.google {
  margin-left: 1em;

}
a:hover {
  color: #C7C7C8;
  background-color: #fff;
}

</style>

<footer class="footer bg-light text-center text-white">

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">

   Made With Angular © 2022
    <a  class="google"
        href="https://www.google.com/search?q=angular"
        target="_blank"
        rel="noopener norefferrer"
        role="button"
        ><fa-icon class="fa-1x" [icon]="faGoogle"></fa-icon></a>

    <a  class="github"
        href="https://github.com/HisuiKitsune/Angular_Project"
        target="_blank"
        rel="norefferer noopener"
        role="button"
        ><fa-icon class="fa-1x" [icon]="faGithub"></fa-icon></a>

    <a  class="linkedin"
        href="#!"
        role="button"
        ><fa-icon class="fa-1x" [icon]="faLinkedinIn"></fa-icon></a>
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
