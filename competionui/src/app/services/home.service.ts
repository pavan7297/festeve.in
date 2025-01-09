import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  headers_post: HttpHeaders = new HttpHeaders();

  _urls = 'http://localhost:3000';

  constructor(private _hhtpclient: HttpClient) {}

  datasaved(inputs: any) {
    const options = {
      headers: this.headers_post,
    };
    return this._hhtpclient
      .post<any>(this._urls+"/save", inputs, options)
      .pipe(
        map((responseData) => {
          //  console.log(JSON.stringify(responseData));
          if (responseData.responseCode === 200) {
            return responseData;
          } else {
            return [];
          }
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }
}
