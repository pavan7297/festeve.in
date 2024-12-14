import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router){

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  gotologin(){
    this.router.navigate([`/login`]);

  }
}
