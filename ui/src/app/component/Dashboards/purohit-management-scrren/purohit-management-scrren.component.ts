import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purohit-management-scrren',
  imports: [CommonModule,FormsModule],
  templateUrl: './purohit-management-scrren.component.html',
  styleUrl: './purohit-management-scrren.component.css'
})
export class PurohitManagementScrrenComponent {
  purohits = [
    { id: 1, name: 'Purohit A', experience: '5 years', availability: 'Available', contact: '1234567890' },
    { id: 2, name: 'Purohit B', experience: '10 years', availability: 'Unavailable', contact: '0987654321' },
    { id: 3, name: 'Purohit C', experience: '3 years', availability: 'Available', contact: '1122334455' },
  ];

  purohitName = '';
  purohitExperience = '';
  purohitAvailability = '';
  purohitContact = '';

  showAddPurohitForm = false;

  addPurohit() {
    const newPurohit = {
      id: this.purohits.length + 1,
      name: this.purohitName,
      experience: this.purohitExperience,
      availability: this.purohitAvailability,
      contact: this.purohitContact,
    };
    this.purohits.push(newPurohit);
    this.clearForm();
  }

  editPurohit(purohit: any) {
    this.purohitName = purohit.name;
    this.purohitExperience = purohit.experience;
    this.purohitAvailability = purohit.availability;
    this.purohitContact = purohit.contact;
    this.deletePurohit(purohit.id); // Delete to replace with edited details
    this.showAddPurohitForm = true;
  }

  deletePurohit(id: number) {
    this.purohits = this.purohits.filter((purohit) => purohit.id !== id);
  }

  clearForm() {
    this.purohitName = '';
    this.purohitExperience = '';
    this.purohitAvailability = '';
    this.purohitContact = '';
    this.showAddPurohitForm = false;
  }
}
