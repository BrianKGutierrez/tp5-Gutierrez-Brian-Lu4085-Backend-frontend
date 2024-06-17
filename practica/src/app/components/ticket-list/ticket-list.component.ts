import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  resumen: any = {
    totalLocal: 0,
    totalExtranjero: 0,
    totalGeneral: 0
  };

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      data => {
        this.tickets = data;
        this.calcularResumen();
      },
      error => console.error(error)
    );
  }

  calcularResumen(): void {
    this.resumen.totalLocal = this.tickets.filter(ticket => ticket.categoriaEspectador === 'local').reduce((sum, ticket) => sum + ticket.precioTicket, 0);
    this.resumen.totalExtranjero = this.tickets.filter(ticket => ticket.categoriaEspectador === 'extranjero').reduce((sum, ticket) => sum + ticket.precioTicket, 0);
    this.resumen.totalGeneral = this.tickets.reduce((sum, ticket) => sum + ticket.precioTicket, 0);
  }

  onDelete(id: string): void {
    this.ticketService.deleteTicket(id).subscribe(
      () => {
        this.tickets = this.tickets.filter(ticket => ticket._id !== id);
        this.calcularResumen();
      },
      error => console.error(error)
    );
  }
}
