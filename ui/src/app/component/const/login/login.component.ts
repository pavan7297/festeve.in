import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:any;
  pwd:any;

  constructor(private router: Router) {}

  login(){
    localStorage.setItem('user',this.user);
    localStorage.setItem('pwd',this.pwd);

    // this.router.navigate([`/Dashboard`]);
    this.router.navigate([`/Home`]);
  }

  needsignup(){
    this.router.navigate([`/signup`]);
  }

}
