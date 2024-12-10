import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:any;
  pwd:any;


  login(){
    localStorage.setItem('user',this.user);
    localStorage.setItem('pwd',this.pwd);
  }

}
