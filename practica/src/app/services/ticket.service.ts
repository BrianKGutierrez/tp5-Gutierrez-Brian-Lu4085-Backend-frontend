// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:3000/api';

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

  
  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}/tickets`, ticket);
  }
  

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`);
  }

  updateTicket(id: string, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/tickets/${id}`, ticket);
  }

  deleteTicket(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tickets/${id}`);
  }

  getTicketsByCategoria(categoria: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets/categoria/${categoria}`);
  }
}
