// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:3000/api';
  urlBase: string = 'http://localhost:3000/api/ticket/'

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

  getTicketById (id: string){
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this.http.get(this.urlBase + id, httpOptions);
  }
  getTickets(): Observable<any> {
    return this.http.get(this.urlBase);
  }
  getTicketByCategoria(categoria: string): Observable<any> {
    // No need for HttpParams if you're using a URL parameter
    return this.http.get(`${this.urlBase}category/:${categoria}`);
  }
  updateTicket(ticket: Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
    let body: any = JSON.stringify(ticket);
    return this.http.put(this.urlBase + ticket._id, body, httpOptions);

  }
  addTicket(ticket: Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
    let body: any = JSON.stringify(ticket);
    return this.http.post(this.urlBase, body, httpOptions);
  }
  removeTicket (id: String ): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this.http.delete(this.urlBase+id, httpOptions);
  }
}
