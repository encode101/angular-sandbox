import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss'],
})
export class LandingScreenComponent {
  isLoginButtonDisabled = false;
  LoginLabelText = 'Open Dashboard';
  LoginButtonClass = 'login-button';

  loginButtonClick(resp: any) {
    console.log(resp);
  }

  ngOnInit() {
    console.log('Landing Screen');
  }
}
