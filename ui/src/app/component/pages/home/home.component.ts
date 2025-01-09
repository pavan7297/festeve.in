import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../const/slider/slider.component';
import { Footer1Component } from '../../const/footer1/footer1.component';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { HomeService } from '../../../service/page/home.service';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { NewsletterComponent } from "../sub-pages/newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, Footer1Component, CommonModule, ButtonModule, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  currentDate: string | undefined;
  festeve_data: any;
  
  constructor(private server: HomeService, private datepip: DatePipe,private router:Router) {}
  
  ngOnInit(): void {
    const today = new Date();
    this.currentDate = this.datepip.transform(today, 'yyyy-MM-dd') || '';
    console.log("dat:::::::::::::::::::"+this.currentDate);
    // Call the function to fetch data
    this.getthedate();
  }
  
  getthedate() {
    this.server.datasaved(this.currentDate).subscribe((res) => {
      localStorage.setItem("todayfest",JSON.stringify(res))
      // Directly assign the response to festeve_data
      this.festeve_data = res;  // No need to use JSON.stringify here
      console.log('Data:', this.festeve_data);
    });
  }

  rediecttofestevedetails(){
    this.router.navigate([`/festivaldescription`]);
  }

  clothroute(){
    this.router.navigate([`/clothing`])
  }

  essenroute(){
    this.router.navigate([`/essentials`])
  }

  purohitroute(){
    this.router.navigate([`/Purohit`])
  }
   // Method to get the image URL based on date or other conditions
   getImageUrl(date: string | undefined): string {
    if (date) {
      // You can create different image paths based on the date or other values
      if (date.includes('01')) {
        return 'assets/icons/january.png'; // For example, January
      } else if (date.includes('02')) {
        return 'assets/icons/february.png'; // February
      } else {
        return 'assets/icons/default.png'; // Default image
      }
    }
    return 'assets/icons/default.png'; // Default image if no date
  }

  products = [
    { name: 'Pizza', category: 'Food', img: 'path_to_image', price: '₹10' },
    { name: 'Shirt', category: 'Clothing', img: 'path_to_image', price: '₹20' },
    {
      name: 'Toothbrush',
      category: 'Essentials',
      img: 'path_to_image',
      price: '₹5',
    },
    {
      name: 'Gift Box',
      category: 'Gifting',
      img: 'path_to_image',
      price: '₹15',
    },
    // Add more products as needed
  ];

  // State to hold the selected category and filtered products
  selectedCategory: string = 'Essentials'; // Default category
  filteredProducts = this.products.filter(
    (product) => product.category === this.selectedCategory
  );

  // Method to filter products based on the selected category
  filterProducts(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(
      (product) => product.category === category
    );
  }
}
