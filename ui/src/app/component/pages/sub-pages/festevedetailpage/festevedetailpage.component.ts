import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festevedetailpage',
  imports: [],
  templateUrl: './festevedetailpage.component.html',
  styleUrl: './festevedetailpage.component.css',
})
export class FestevedetailpageComponent implements OnInit {
  festeve: any;
  data: any;

  ngOnInit() {
    this.data = localStorage.getItem('todayfest');
    this.festeve = JSON.parse(this.data);
    console.log(this.festeve);
  }
}
