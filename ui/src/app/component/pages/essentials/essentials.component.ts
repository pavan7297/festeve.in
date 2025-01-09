import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../const/slider/slider.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsletterComponent } from "../sub-pages/newsletter/newsletter.component";
import { Footer1Component } from '../../const/footer1/footer1.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-essentials',
  imports: [SliderComponent, CommonModule, FormsModule, NewsletterComponent,Footer1Component],
  templateUrl: './essentials.component.html',
  styleUrl: './essentials.component.css',
})
export class EssentialsComponent {

  constructor(private router:Router){}

  combo(){
    this.router.navigate([`/essentials`]);
  }

  list(){
    this.router.navigate([`/essentials-list`]);
  }
}
