import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  [x: string]: any;

  headers_post: HttpHeaders = new HttpHeaders();
  error = new Subject<string>();

  private apiUrl = 'http://localhost:2024';

  constructor(private http: HttpClient) {
    this.headers_post ==
      new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
  }

  getMenProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/getMenProducts');
  }

  getMen() {
    const options = {
      headers: this.headers_post,
    };

    return this.http
      .get<Mendata>(this.apiUrl + '/getMenProducts', options)
      .pipe(
        map((responseData) => {
          if (responseData.responseCode == 200) {
            console.log(JSON.stringify(responseData));
            return responseData.output;
          } else {
            return undefined;
          }
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  getProductById(productId: string) {
    const options = { headers: this.headers_post };

    return this.http
      .get<any>(`${this.apiUrl}/getProductById/${productId}`, options)
      .pipe(
        map((responseData) => {
          if (responseData.responseCode === 200) {
            return responseData.output; // Assuming `output` contains the product data
          } else {
            console.error('Error in response:', responseData.errorsMsgs);
            return null;
          }
        }),
        catchError((errorRes) => {
          console.error('HTTP Error:', errorRes);
          return throwError(
            () => new Error(errorRes.message || 'Unknown error')
          );
        })
      );
  }
}

export interface Mendata {
  status: string;
  responseCode: number;
  errorsMsgs: null | String;
  output: string;
  serverIp: string | null;
  port: null | number;
  eventId: number;
}
