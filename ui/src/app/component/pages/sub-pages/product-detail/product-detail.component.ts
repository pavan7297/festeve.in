import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../service/service/products.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any = null; // To hold the product details
  errorMessage: string | null = null;
  activeImage = 0;
  quantity = 1;
  pincode = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('product_id'); // Fetch product_id from route

    if (productId) {
      this.productsService.getProductById(productId).subscribe(
        (data) => {
          if (data) {
            this.product = data;
            console.log('Product Details:', this.product);
          } else {
            this.errorMessage = 'Product not found.';
          }
        },
        (error) => {
          this.errorMessage = error.message || 'An error occurred.';
          console.error('Component Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Invalid product ID.';
    }
  }

  setActiveImage(index: number): void {
    this.activeImage = index;
  }

  addToCart(): void {
    console.log(
      `Added to cart: ${this.product?.product_title}, Quantity: ${this.quantity}, Pincode: ${this.pincode}`
    );
  }
}