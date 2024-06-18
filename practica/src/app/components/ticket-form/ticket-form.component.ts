import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Espectador } from '../../models/espectador';
import { EspectadorService } from '../../services/espectador.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  accion: string=''; 
  ticket!: Ticket; 
  espectadores : Array<Espectador>=[]; 

  constructor(private activatedRoute: ActivatedRoute, 
              private ticketService: TicketService, 
             private espectadorService: TicketService, 
              private router: Router
  ){
    this.iniciarVariable();
    this.cargarEspectadores(); 

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.iniciarVariable(); 
      } else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }
  
  iniciarVariable(){
    this.ticket = new Ticket (); 
  }
  cargarTicket (id: string){
    this.ticketService.getTicketById(id).subscribe(
      (result)=>{
        Object.assign(this.ticket, result); 
        this.ticket.espectador= this.espectadores.find (espectador=>(espectador._id=== this.ticket.espectador._id))!
      }
    )

  }
  cargarEspectadores (){
    this.espectadores= new Array <Espectador>(); 
    this.espectadorService.getEspectadores().subscribe(
      (data)=>{
        let vespectador: Espectador= new Espectador (); 
        data.forEach((element:any)=> {
          Object.assign(vespectador, element); 
          this.espectadores.push (vespectador); 
          vespectador = new Espectador();   
        }); 
      },
      (error)=>{
        console.log(error); 
      }

    )
  }
  actualizarTicket(){
    this.ticketService.updateTicket(this.ticket).subscribe(
      result=>{
        if(result.status ==1){
          alert("El Ticket se actualizo correctamente"); 
          this.router.navigate(['ticket']); 
        }

      },
      error =>{
        alert ("Ha ocurrido un error"); 
        console.log(error); 
      }
    )
  }
  registrarTicket (){ 
    this.ticketService.addTicket (this.ticket).subscribe (
      result=>{
        if(result.status==1){
          alert("El ticket  se agrego correctamente"); 
          this.router.navigate(['ticket']);
        }
      }, 
      error=>{
        alert ("Ha ocurrido un error"); 
        console.log(error); 
      }
    )
  }

}
