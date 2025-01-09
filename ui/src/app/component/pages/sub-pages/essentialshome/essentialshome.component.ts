import { Component } from '@angular/core';
import { SliderComponent } from '../../../const/slider/slider.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-essentialshome',
  imports: [SliderComponent,CommonModule,FormsModule],
  templateUrl: './essentialshome.component.html',
  styleUrl: './essentialshome.component.css'
})
export class EssentialshomeComponent {

  pujaItems = [
    {
      title: 'Puja Needs',
      imgSrc: 'https://via.placeholder.com/400x300?text=Puja+Needs', // Replace with actual image
    },
    {
      title: 'Flowers',
      imgSrc: 'https://via.placeholder.com/400x300?text=Flowers', // Replace with actual image
    },
    {
      title: 'Puja Kit',
      imgSrc: 'https://via.placeholder.com/400x300?text=Puja+Kit', // Replace with actual image
    },
    {
      title: 'Decoration',
      imgSrc: 'https://via.placeholder.com/400x300?text=Decoration', // Replace with actual image
    },
  ];

}
