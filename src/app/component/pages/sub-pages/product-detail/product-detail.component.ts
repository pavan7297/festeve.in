import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;
  product = { name: '', description: '', price: '', image: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.fetchProductDetails();
    });
  }

  fetchProductDetails() {
    // Fetch product details based on the productId (replace with real API call)
    // For demo purposes, we are using hardcoded data
    if (this.productId === 1) {
      this.product = {
        name: 'Product 1',
        description: 'This is the description of product 1.',
        price: '$100',
        image: 'https://via.placeholder.com/400',
      };
    } else if (this.productId === 2) {
      this.product = {
        name: 'Product 2',
        description: 'This is the description of product 2.',
        price: '$150',
        image: 'https://via.placeholder.com/400',
      };
    } else if (this.productId === 3) {
      this.product = {
        name: 'Product 3',
        description: 'This is the description of product 3.',
        price: '$200',
        image: 'https://via.placeholder.com/400',
      };
    }else if (this.productId === 4) {
      this.product = {
        name: 'Product 4',
        description: 'This is the description of product 4.',
        price: '$150',
        image: 'https://via.placeholder.com/400',
      };
    } 
  }
}
