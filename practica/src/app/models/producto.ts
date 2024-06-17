export class Producto {
        _id!: string;
        name: string;
        description: string;
        image: string;
        price: number;
        stock: number;
        featured:boolean  
        constructor(){
            this.name = "";
            this.description = "";
            this.image = "";
            this.price = 0;
            this.stock = 0;
            this.featured = false;
        }
      
}
