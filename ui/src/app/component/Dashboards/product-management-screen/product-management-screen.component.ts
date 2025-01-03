import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-management-screen',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-management-screen.component.html',
  styleUrl: './product-management-screen.component.css',
})
export class ProductManagementScreenComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 300,
    },
  ];

  productName = '';
  productDescription = '';
  productPrice: number | null = null;

  showAddProductForm = false;

addProduct() {
  if (this.productPrice === null) {
    alert('Please enter a valid price');
    return;
  }

  const newProduct = {
    id: this.products.length + 1,
    name: this.productName,
    description: this.productDescription,
    price: this.productPrice || 0,
  };

  this.products.push(newProduct);
  this.clearForm();
}

  editProduct(product: any) {
    this.productName = product.name;
    this.productDescription = product.description;
    this.productPrice = product.price;
    this.deleteProduct(product.id); // Delete to replace with edited details
    this.showAddProductForm = true;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  clearForm() {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = null;
    this.showAddProductForm = false;
  }
}
