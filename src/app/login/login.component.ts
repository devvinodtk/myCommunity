import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showpassword = 0;
  @ViewChild('passwordfield', { static: true }) passwordField: ElementRef;
  @ViewChild('visibilityicon', { static: true }) visibilityIcon: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onShowPasswordButtonClick() {
    if (this.showpassword === 0) {
      this.passwordField.nativeElement.setAttribute('type', 'text');
      this.visibilityIcon.nativeElement.innerText = 'visibility_off'
      this.showpassword = 1;
    } else {
      this.passwordField.nativeElement.setAttribute('type', 'password');
      this.visibilityIcon.nativeElement.innerText = 'visibility'
      this.showpassword = 0;
    }
  }

  onLoginButtonClick() {
    this.router.navigateByUrl('/dashboard');
  }

  onForgotPasswordClick() {
    console.log('you will be able to reset your password soon');
  }
}
