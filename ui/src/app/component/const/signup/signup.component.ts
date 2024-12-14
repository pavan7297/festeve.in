import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {}

  
  ngOnInit(): void {}



  name: any;
  email: any;
  phonenumber: any;
  password: any;

  //  signupobj = {
  //   objname: this.name,
  //   objemail: this.email,
  //   objphonenumber: this.phonenumber,
  //   objpassword: this.password,
  // };

  onnext() {
    console.log("object"+this.name);
    console.log("object"+this.email);
    console.log("object"+this.phonenumber);
    console.log("object"+this.password);
    setTimeout(() => {
      localStorage.setItem("name",JSON.stringify(this.name));
      localStorage.setItem("email",JSON.stringify(this.email));
      localStorage.setItem("phone",JSON.stringify(this.phonenumber));
      localStorage.setItem("pwd",JSON.stringify(this.password));
      
    }, 3000);
    this.router.navigate(['/signup2']);
  }
}

