import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { Espectador } from '../../models/espectador';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup;
  espectadores: Espectador[] = [];
  precioCobrado: number | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      precioTicket: ['', Validators.required],
      categoriaEspectador: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      espectadorId: ['', Validators.required]
    });

    this.ticketService.getEspectadores().subscribe(
      data => this.espectadores = data,
      error => console.error(error)
    );

    this.ticketForm.get('categoriaEspectador')?.valueChanges.subscribe(value => {
      this.updatePrecioCobrado();
    });

    this.ticketForm.get('precioTicket')?.valueChanges.subscribe(value => {
      this.updatePrecioCobrado();
    });
  }

  updatePrecioCobrado(): void {
    const precioTicket = this.ticketForm.get('precioTicket')?.value;
    const categoriaEspectador = this.ticketForm.get('categoriaEspectador')?.value;

    if (precioTicket && categoriaEspectador) {
      if (categoriaEspectador === 'local') {
        this.precioCobrado = precioTicket * 0.8;
      } else {
        this.precioCobrado = precioTicket;
      }
    } else {
      this.precioCobrado = null;
    }
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const espectador = this.espectadores.find(e => e._id === this.ticketForm.get('espectadorId')?.value);
      if (!espectador) {
        console.error('Espectador no encontrado');
        return;
      }

      const ticket: Ticket = {
        ...this.ticketForm.value,
        precioCobrado: this.precioCobrado!,
        espectador: espectador
      };

      console.log('Ticket a enviar:', ticket); // Agrega esto para depurar los datos enviados

      this.ticketService.createTicket(ticket).subscribe(
        response => {
          console.log('Ticket creado', response);
          this.router.navigate(['/tickets']);
        },
        error => console.error('Error al crear el ticket', error)
      );
    }
  }
}
