import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Producto[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onEdit(id: string): void {
    this.router.navigate(['/products/edit', id]);
  }

  onDelete(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p._id !== id);
    });
  }
}