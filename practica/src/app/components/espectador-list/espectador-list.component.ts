import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Espectador } from '../../models/espectador';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-espectador-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './espectador-list.component.html',
  styleUrl: './espectador-list.component.css'
})
export class EspectadorListComponent {


espectadores: Espectador[] = [];

  constructor(private espectadorService: TicketService,private router: Router,) { }

  ngOnInit(): void {
    this.espectadorService.getEspectadores().subscribe(
      (data) => this.espectadores = data,
      (error) => console.error(error)
    );
  }
  verDetalles(id: string): void {
    this.router.navigate(['/espectadores', id]); // Navega a la ruta '/espectadores/:id'
  }
}