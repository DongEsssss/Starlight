import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}
  signin() {
    const validUsername = 'admin';
    const validPassword = '1234';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigateByUrl('starlightcamping/home/mainhome');
    } else {
      window.location.reload();
      alert('로그인과 패스워드를 한번 더 확인해주십시오.');
    }
  }
  signskip() {
    this.router.navigateByUrl('starlightcamping/home/mainhome');
  }
}
