import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // productId: number | null = null;
  // product = { name: '', description: '', price: '', image: '' };

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     this.productId = Number(params.get('id'));
  //     this.fetchProductDetails();
  //   });
  // }

  // fetchProductDetails() {
  //   // Fetch product details based on the productId (replace with real API call)
  //   // For demo purposes, we are using hardcoded data
  //   if (this.productId === 1) {
  //     this.product = {
  //       name: 'Product 1',
  //       description: 'This is the description of product 1.',
  //       price: '$100',
  //       image: 'https://via.placeholder.com/400',
  //     };
  //   } else if (this.productId === 2) {
  //     this.product = {
  //       name: 'Product 2',
  //       description: 'This is the description of product 2.',
  //       price: '$150',
  //       image: 'https://via.placeholder.com/400',
  //     };
  //   } else if (this.productId === 3) {
  //     this.product = {
  //       name: 'Product 3',
  //       description: 'This is the description of product 3.',
  //       price: '$200',
  //       image: 'https://via.placeholder.com/400',
  //     };
  //   }else if (this.productId === 4) {
  //     this.product = {
  //       name: 'Product 4',
  //       description: 'This is the description of product 4.',
  //       price: '$150',
  //       image: 'https://via.placeholder.com/400',
  //     };
  //   } 
  // }

  images = [
    { id: 1, imgUrl: 'https://freestocks.org/fs/wp-content/uploads/2023/09/old_vintage_christmas_ornaments_at_a_flea_market-1024x683.jpg' },
    { id: 2, imgUrl: 'https://via.placeholder.com/150' },
    { id: 3, imgUrl: 'https://via.placeholder.com/150' },
    { id: 4, imgUrl: 'https://via.placeholder.com/150' },
    { id: 5, imgUrl: 'https://via.placeholder.com/150' }
  ];
  
  activeImage = 0;
  sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  quantity = 1;
  pincode = '';

  setActiveImage(index: number): void {
    this.activeImage = index;
  }

  addToCart(): void {
    console.log(`Added to cart: Quantity ${this.quantity}, Pincode ${this.pincode}`);
  }
}
