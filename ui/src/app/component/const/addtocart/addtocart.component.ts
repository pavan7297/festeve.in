import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtocart',
  imports: [CommonModule,FormsModule],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css',
})
export class AddtocartComponent {
  cartItems = [
    {
      id: 1,
      name: 'Biryani',
      description: 'Single',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
      quantity: 1,
      price: 500,
      totalPrice: 500,
    },
    {
      id: 2,
      name: 'Biryani',
      description: 'Single',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
      quantity: 1,
      price: 500,
      totalPrice: 500,
    },
    {
      id: 3,
      name: 'Biryani',
      description: 'Single',
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
      quantity: 1,
      price: 500,
      totalPrice: 500,
    },
  ];

  increaseQuantity(item: any) {
    item.quantity++;
    item.totalPrice = item.price * item.quantity;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
  }

  calculateSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }
}
