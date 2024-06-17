import { Component } from '@angular/core';
import { SectorService } from '../../services/sector/sector.service';
import { Sector } from '../../models/sector';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.css'
})
export class SectorComponent {
  sectores: Array<Sector> ;
  constructor(private sectorService: SectorService,
              private router: Router
  ){
    this.sectores=new Array<Sector>();
    this.getSectores();

  }
  getSectores(){    //este me devuelve metodo me devuelve el array de los sectores cargados
    this.sectorService.getSectores().subscribe(
      result => {
        let vsector:Sector =new Sector();
        result.forEach((element:any) => {
          Object.assign(vsector, element)//asigno elemento porelemento a la variable dinamica

          this.sectores.push(vsector);
          vsector=new Sector();
          
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }
  agregar(){
    this.router.navigate(['sectorform','0']);

  }
  modificar(sector:Sector){
    this.router.navigate(['sectorform',sector._id]);
  }
  eliminar(){}

}
