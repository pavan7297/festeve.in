import { Component } from '@angular/core';
import { SliderComponent } from '../../const/slider/slider.component';
import { RouterLink } from '@angular/router';
import { Footer1Component } from "../../const/footer1/footer1.component";

@Component({
  selector: 'app-clothing',
  imports: [SliderComponent, RouterLink, Footer1Component],
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})
export class ClothingComponent {

}
