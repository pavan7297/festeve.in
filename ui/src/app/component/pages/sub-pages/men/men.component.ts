import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';
import { ProductsService } from '../../../../service/service/products.service';

@Component({
  selector: 'app-men',
  imports: [CommonModule, MatSliderModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css',
})
export class MenComponent implements OnInit {
  products: any;
  errorMessage: string | null = null;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.productsService.getNodeMenProducts().subscribe(
      (data) => {
        if (data) {
          // this.products = data.mens;
          this.products = data;
          console.log('Products:', this.products);
        } else {
          this.errorMessage = 'Failed to fetch products.';
        }
      },
      (error) => {
        this.errorMessage = error.message || 'An error occurred.';
        console.error('Component Error:', error);
      }
    );
  }

  goToProductDetail(_id: number) {
    console.log("object"+_id);
    this.router.navigate([`/product/${_id}`]);
  }
}
