import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

 
 // Method to get the current location
 getCurrentLocation(): Promise<GeolocationCoordinates | null> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = position.coords;
          if (coords && coords.latitude !== undefined && coords.longitude !== undefined) {
            resolve(coords);  // Resolve with valid coordinates
          } else {
            reject('Coordinates are invalid');
          }
        },
        (error) => {
          reject(error.message || 'Failed to get location');
        }
      );
    } else {
      reject('Geolocation not supported');  // Reject if geolocation is not supported
    }
  });
}}
