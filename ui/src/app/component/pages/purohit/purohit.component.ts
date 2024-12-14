import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purohit',
  imports: [],
  templateUrl: './purohit.component.html',
  styleUrl: './purohit.component.css'
})
export class PurohitComponent implements OnInit{

  constructor(private router: Router){}


  ngOnInit(){
    const user = localStorage.getItem("user");
    if(user===null||user===undefined){
      this.router.navigate([`/login`]);
    }
  //  console.log(user);
  }


}
