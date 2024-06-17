import { Injectable } from '@angular/core';
import { Expediente } from '../models/expediente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  private apiUrl = 'http://localhost:3000/api/expediente';

  constructor(private _http: HttpClient) { }

  getExpedientesList(): Observable<Expediente[]> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Expediente[]>(this.apiUrl, httpOption);
  }

  add(expediente: Expediente): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.post<any>(this.apiUrl, expediente, httpOption);
  }

  getExpedienteById(id: string): Observable<Expediente> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Expediente>(`${this.apiUrl}/${id}`, httpOption);
  }
}
