import { Component } from '@angular/core';
import { SliderComponent } from '../../const/slider/slider.component';
import { Footer1Component } from "../../const/footer1/footer1.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, Footer1Component,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  products = [
    { name: 'Pizza', category: 'Food', img: 'path_to_image', price: '$10' },
    { name: 'Shirt', category: 'Clothing', img: 'path_to_image', price: '$20' },
    { name: 'Toothbrush', category: 'Essentials', img: 'path_to_image', price: '$5' },
    { name: 'Gift Box', category: 'Gifting', img: 'path_to_image', price: '$15' },
    // Add more products as needed
  ];

  // State to hold the selected category and filtered products
  selectedCategory: string = 'Essentials'; // Default category
  filteredProducts = this.products.filter(product => product.category === this.selectedCategory);

  // Method to filter products based on the selected category
  filterProducts(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(product => product.category === category);
  }
}
