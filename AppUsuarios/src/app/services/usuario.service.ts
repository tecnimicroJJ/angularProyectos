import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://reqres.in/api/users';
  url2 = 'https://reqres.in/api/users';



  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url);

  }

  getUsuario(id:string): Observable<any>{
    return this.http.get<any>(this.url2+'/'+'?id='+id);
  }

}
