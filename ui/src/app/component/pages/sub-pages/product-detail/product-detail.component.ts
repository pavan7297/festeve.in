import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../service/service/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: any = null; // To hold the product details
  errorMessage: string | null = null;
  activeImage = 0;
  quantity = 1;
  pincode = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private http: HttpClient,
    private routers:Router
  ) {}
  productId: any;
  productData: any;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id'); // Get product ID from URL
    console.log('pdi::::::::::' + this.productId);
    if (this.productId) {
      console.log(
        'product id:::::::::::::::::;are:::::::::::::' + this.productId.State
      );
      this.getproduct();
      // this.getProductDetails();

    } else {
      this.errorMessage = 'Invalid product ID.';
    }
  }

  // getProductDetails() {
  //   this.http.get(`http://localhost:3000/api/festival/getproducts/`+this.productId).subscribe(
  //     (data) => {
  //       console.log("data::::::::::::;"+JSON.stringify(data));
  //       // this.product = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching product details:', error);
  //     }
  //   );
  // }

  getproduct() {
    this.productsService
      .getProductByIdWithNode(this.productId)
      .subscribe((res) => {
        if (res) {
          this.productData = res.product;
          console.log("product data::::::::"+JSON.stringify(this.productData));
        } else {
          this.errorMessage = 'Failed to fetch products.';
        }
      });
  }

  setActiveImage(index: number): void {
    this.activeImage = index;
  }

  addToCart() {
    const cartData = {
      productId: this.productId,
      addquantity: this.quantity,
    };

    console.log('Store data:', JSON.stringify(cartData));

    this.productsService.addToCart(cartData).subscribe(
      (response) => {
        console.log('Add to cart response:', response);
        // Navigate to the cart page after successful addition
        this.routers.navigate(['/AddToCart']);
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
  }

}
