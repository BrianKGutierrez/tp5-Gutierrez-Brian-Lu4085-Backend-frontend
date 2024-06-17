// src/app/services/espectador.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {
  private baseUrl = 'http://localhost:3000/api/espectadores';

  constructor(private http: HttpClient) {}

 
  createEspectador(espectador: Espectador): Observable<Espectador> {
    return this.http.post<Espectador>(`${this.baseUrl}/espectadores`, espectador);
  }

  getEspectadores(): Observable<Espectador[]> {
    return this.http.get<Espectador[]>(`${this.baseUrl}/espectadores`);
  }

  getEspectador(id: string): Observable<Espectador> {
    return this.http.get<Espectador>(`${this.baseUrl}/espectadores/${id}`);
  }
}