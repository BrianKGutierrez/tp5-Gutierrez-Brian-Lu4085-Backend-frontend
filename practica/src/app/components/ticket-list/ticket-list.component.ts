import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent  {
  constructor(private ticketService: TicketService,
    private router: Router
  ) {
    this.getTickets();

  }
  tickets: Array<Ticket> = [];
  ticketsFiltrados: Array<any> = [];
  ticketRemove: Ticket = new Ticket();
  categoria: string = '';

  filtrar() {
    this.ticketService.getTicketByCategoria(this.categoria).subscribe(
      (data) => {
        console.log(data);
        this.ticketsFiltrados = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getTickets() {
    this.ticketService.getTickets().subscribe(
      (data) => {
        let vticket: Ticket = new Ticket();
        data.forEach((element: any) => {
          Object.assign(vticket, element);
          this.tickets.push(vticket);
          vticket = new Ticket();
        });
      },
      (error) => {
        console.log(error);
      }
    )

  }

  modificarTicket(id: string) {
    this.router.navigate(['ticket-form', id]);
  }
  agregarTicket() {
    this.router.navigate(['ticket-form', '0']);
  }
  seleccionarTicket(ticket: Ticket) {
    this.ticketRemove = ticket;
  }
  eliminarTicket(id: string) {
    this.ticketService.removeTicket(id).subscribe(
      (result) => {
        if (result.status == 1) {
          alert("El Ticket se ha eliminado correctamente");
          this.tickets = this.tickets.filter(ticket => ticket._id !== id);
          this.router.navigate(['ticket']);
        }
      },
      (error) => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    );
  }

}
