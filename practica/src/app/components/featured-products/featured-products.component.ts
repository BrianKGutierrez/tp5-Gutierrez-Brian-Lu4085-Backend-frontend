import { Component } from '@angular/core';
import { ProductService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  featuredProducts: Producto[] = [];

 
  groupedFeaturedProducts: Producto[][] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
      this.groupFeaturedProducts();
    });
  }

  groupFeaturedProducts() {
    for (let i = 0; i < this.featuredProducts.length; i += 2) {
      this.groupedFeaturedProducts.push(this.featuredProducts.slice(i, i + 2));
    }
  }
}


