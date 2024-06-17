import { Component } from '@angular/core';
import { Espectador } from '../../models/espectador';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-espectador-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './espectador-detail.component.html',
  styleUrl: './espectador-detail.component.css'
})
export class EspectadorDetailComponent {

  espectador: Espectador | undefined;

  constructor(
    private route: ActivatedRoute,
    private espectadorService: TicketService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEspectador();
  }

  getEspectador(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.espectadorService.getEspectador(id).subscribe(
        (espectador) => this.espectador = espectador,
        (error) => console.error(error)
      );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
