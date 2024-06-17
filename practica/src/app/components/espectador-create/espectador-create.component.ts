import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Espectador } from '../../models/espectador';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-espectador-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './espectador-create.component.html',
  styleUrl: './espectador-create.component.css'
})
export class EspectadorCreateComponent { 
  espectador: Espectador = new Espectador(); // Inicializa correctamente el objeto espectador

  constructor(private espectadorService: TicketService) { }

  onSubmit() {
    this.espectadorService.createEspectador(this.espectador).subscribe(
      response => {
        console.log('Espectador creado', response);
        // Aquí podrías agregar lógica adicional después de crear el espectador
      },
      error => {
        console.error('Error al crear el espectador', error);
      }
    );
  }
}