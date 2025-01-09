import { JsonPipe } from '@angular/common';
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
  private apiNodeUrl = 'http://localhost:3000/api/festival/';

  constructor(private http: HttpClient) {
    this.headers_post ==
      new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
  }

  getMenProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'getMenProducts');
  }

  getNodeMenProducts(): Observable<any> {
    return this.http.get<any>(this.apiNodeUrl + 'products/MEN');
  }

  getMen() {
    const options = {
      headers: this.headers_post,
    };

    return this.http
      .get<Mendata>(this.apiUrl + 'getMenProducts', options)
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

  getNodeMen() {
    const options = {
      headers: this.headers_post,
    };

    return this.http
      .get<Mendata>(this.apiNodeUrl + 'products/MEN', options)
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
  getProductByIdWithNode(productId: string) {
    console.log("serveice product id:::::::::"+productId);
    const options = {
      headers: this.headers_post,
    };

    return this.http
      .get<any>(this.apiNodeUrl+'getproducts/' + productId, options)
      .pipe(
        map((responseData) => {
          // console.log("responseData:::::::::"+JSON.stringify(responseData));
          // return responseData;
          if (responseData && responseData.responseCode === 200) {
            console.log(JSON.stringify(responseData));
            return responseData;
          } else {
            console.error("Invalid response or responseCode not 200");
            return undefined;
          }
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  // New POST method for adding to cart
  addToCart(cartData: { productId: string; addquantity: number }): Observable<any> {
    const options = {
      headers: this.headers_post,
    };

    return this.http.post<any>(this.apiNodeUrl+'addcart', cartData, options).pipe(
      map((responseData) => {
        if (responseData && responseData.responseCode === 201) {
          console.log('Cart data stored successfully:', responseData);
          return responseData;
        } else {
          console.error('Failed to store cart data. Response:', responseData);
          return undefined;
        }
      }),
      catchError((errorRes) => {
        console.error('Error while storing cart data:', errorRes);
        return throwError(errorRes);
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
