import { Agente } from "./agente";

export class Sector {
        _id!: string;
        nombre: string
        funcion: string
        email: string
        responsable: Agente;
        constructor(){
            
            this.nombre = "";
            this.funcion = "";
            this.email = "";
            this.responsable = new Agente();
        }
        
}
