import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formals',
  imports: [CommonModule],
  templateUrl: './formals.component.html',
  styleUrl: './formals.component.css'
})
export class FormalsComponent {
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
