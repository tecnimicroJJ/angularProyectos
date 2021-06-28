import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = "https://api-ssl.bitly.com/v4/shorten";
  token = "ae98da484c3e4cf669bc050342301d0ea092ae7d";

  constructor(private http: HttpClient) { }

  getUrlShort(nombreUrl:string):Observable<any>{
      
    //const tokenHeader = new HttpHeaders({Authorization: "Bearer "+this.token});

    const body = {
      long_url: nombreUrl
    }

    return this.http.post(this.url,body).pipe(catchError((error: HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));;
  }

}
