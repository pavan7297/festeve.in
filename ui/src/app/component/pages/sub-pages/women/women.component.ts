import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  imports: [CommonModule,MatSliderModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/200' }
  ];

  constructor(private router: Router) {}

  goToProductDetail(productId: number) {
    this.router.navigate([`/product/${productId}`]);
  }

}
