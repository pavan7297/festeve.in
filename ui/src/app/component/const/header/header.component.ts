import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GeolocationService } from '../../../service/service/service/geolocation.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive,ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  latitude: number | null = null;
  longitude: number | null = null;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private geolocationService: GeolocationService
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  gotologin() {
    this.router.navigate([`/login`]);
  }

  ngOnInit() {
    // this.getLocation();
    // console.log(JSON.stringify(this.getLocation()));
  }

  // Function to get current location
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        localStorage.setItem('latitude',JSON.stringify(this.latitude))
        localStorage.setItem('longitude',JSON.stringify(this.longitude))
      });
    }

    // this.geolocationService.getCurrentLocation()
    //   .then((coords) => {
    //     // Check if coords is valid
    //     if (coords && coords.latitude && coords.longitude) {
    //       this.latitude = coords.latitude;
    //       this.longitude = coords.longitude;
    //     } else {
    //       this.errorMessage = 'Invalid coordinates received';
    //     }
    //   })
    //   .catch((error) => {
    //     this.errorMessage = 'Error: ' + (error instanceof Error ? error.message : error);
    //   });
  }
}
