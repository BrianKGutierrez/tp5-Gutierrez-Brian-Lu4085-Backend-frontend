import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from '../../models/sector';
import { SectorService } from '../../services/sector/sector.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgenteService } from '../../services/agente/agente.service';
import { Agente } from '../../models/agente';

@Component({
  selector: 'app-sector-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sector-form.component.html',
  styleUrl: './sector-form.component.css'
})

export class SectorFormComponent {
  agentes!:Array<Agente>
  constructor(private activatedRoute: ActivatedRoute,
              private sectorService: SectorService,
              private agenteService: AgenteService,
              private router: Router
  ){
    this.iniciarVariable()
    this.cargarAgentes();
    }
  accion:string="";
  sector!:Sector;
  
  ngOnInit():void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']=="0"){
        this.accion="new";
        this.iniciarVariable();
      }
      else{
        this.accion="update";
        this.cargarSector(params['id']);
      }
      })
  }
  iniciarVariable(){
    this.sector=new Sector();
    this.agentes=new Array<Agente>();
  }
  cargarSector(id:string){
    this.sectorService.getSector(id).subscribe(
      result=>{
        console.log(result)
        Object.assign(this.sector,result)
        this.sector.responsable=this.agentes.find(agente=>(agente._id===this.sector.responsable._id))! //como en el formulario no se muestra el responsable esto lo que hace es buscar en el array de agentes el agente de sector.responsable segun id en el array y devolverlo para que no se muestra en blanco
      }
    )
  }
  cargarAgentes(){
    this.agentes=new Array<Agente>();
    this.agenteService.getAgentes().subscribe(
      result=>{
        let vagente:Agente =new Agente();
        result.forEach((element:any) => {
          Object.assign(vagente, element)//asigno elemento porelemento a la variable dinamica

          this.agentes.push(vagente);
          vagente=new Agente();
          
        })
      }
    )
  }
  ActualizarSector(){
    this.sectorService.updateSector(this.sector).subscribe(
      result=>{
        if(result.status==1){// si es igual a 1 es porque efectivamente se actualizo esto lo podemos ver definido en el controller del backend
          alert("Sector actualizado");
          this.router.navigate(['sector']);

        }
      },error=>{
        alert("Error:no se actualizo " )
        console.log(<any>error)
      }
    )
  }
  AgregarSector(){
    this.sectorService.addSector(this.sector).subscribe(
      result=>{
        if(result.status==1){// si es igual a 1 es porque efectivamente se actualizo esto lo podemos ver definido en el controller del backend
          alert("Sector guardado");
          this.router.navigate(['sector']);
        }},
      error=>{
        alert("Error:no se guardo " )
        console.log(error)
      })
  }
}

