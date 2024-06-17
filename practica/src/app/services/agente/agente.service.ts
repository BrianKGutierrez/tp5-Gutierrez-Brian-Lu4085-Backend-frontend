import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  urlBase: string='http://localhost:3000/api/agente/'
  constructor(private _http:HttpClient) { }

   getAgentes(): Observable<any> {
    let httpOptions = {
      headers:new HttpHeaders({
    }),
      params: new HttpParams()
      .append('estado',true)
    }
    return this._http.get(this.urlBase,httpOptions)
    }
}
