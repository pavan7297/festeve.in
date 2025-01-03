import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-essentials-management-screen',
  imports: [CommonModule,FormsModule],
  templateUrl: './essentials-management-screen.component.html',
  styleUrl: './essentials-management-screen.component.css',
})
export class EssentialsManagementScreenComponent {
  essentials = [
    { id: 1, name: 'Essential 1', type: 'Type 1', price: 50 },
    { id: 2, name: 'Essential 2', type: 'Type 2', price: 75 },
    { id: 3, name: 'Essential 3', type: 'Type 3', price: 100 },
  ];

  essentialName = '';
  essentialType = '';
  essentialPrice: number | null = null;

  showAddEssentialForm = false;

  addEssential() {
    const newEssential = {
      id: this.essentials.length + 1,
      name: this.essentialName,
      type: this.essentialType,
      price: this.essentialPrice || 0,
    };
    this.essentials.push(newEssential);
    this.clearForm();
  }

  editEssential(essential: any) {
    this.essentialName = essential.name;
    this.essentialType = essential.type;
    this.essentialPrice = essential.price;
    this.deleteEssential(essential.id); // Delete to replace with edited details
    this.showAddEssentialForm = true;
  }

  deleteEssential(id: number) {
    this.essentials = this.essentials.filter(
      (essential) => essential.id !== id
    );
  }

  clearForm() {
    this.essentialName = '';
    this.essentialType = '';
    this.essentialPrice = null;
    this.showAddEssentialForm = false;
  }
}
