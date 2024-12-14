import { Component } from '@angular/core';
import { SliderComponent } from '../../const/slider/slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clothing',
  imports: [SliderComponent,RouterLink],
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})
export class ClothingComponent {

}
