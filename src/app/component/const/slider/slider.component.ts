import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule,],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  images: { url: string; title?: string }[] = [];
  currentIndex = 0;
  autoSlideInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.fetchImages();
    this.images = [
      { url: 'https://picsum.photos/id/237/200/300', title: 'Image 1' },
      { url: 'https://picsum.photos/seed/picsum/200/300', title: 'Image 2' },
      { url: 'https://picsum.photos/200/300?grayscale', title: 'Image 3' },
    ];
    this.startAutoSlide();
  }

  fetchImages(): void {
    // Replace this URL with your backend endpoint
    this.http
      .get<{ url: string; title?: string }[]>('https://images.pexels.com/photos/28370142/pexels-photo-28370142/free-photo-of-a-couple-riding-a-scooter-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
      .subscribe((data) => {
        this.images = data;
      });
  }

  previousSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
}