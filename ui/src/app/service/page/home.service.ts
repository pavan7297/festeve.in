import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  headers_post: HttpHeaders = new HttpHeaders();

  _urls = 'http://localhost:3000/api/festival';

  constructor(private _hhtpclient: HttpClient) {}

  datasaved(inputs: any) {
    const options = {
      headers: this.headers_post,
    };
    return this._hhtpclient
      .get<any>(this._urls + '/date/' + inputs, options)
      .pipe(
        map((responseData) => {
          // console.log('object:::::' + JSON.stringify(responseData.festival));
          if (responseData && responseData.festival) {
            return responseData.festival;
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
