import { Component } from '@angular/core';
import { ProductService } from '../../services/productos.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productForm: FormGroup;
  selectedFile: File | null = null;
  editMode = false;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      featured: [false],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.editMode = true;
        this.productId = id;
        this.productService.getProducts().subscribe(products => {
          const product = products.find(p => p._id === id);
          if (product) {
            this.productForm.patchValue(product);
          }
        });
      }
    });
  }

  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productForm.get('name')!.value);
    formData.append('description', this.productForm.get('description')!.value);
    formData.append('price', this.productForm.get('price')!.value);
    formData.append('stock', this.productForm.get('stock')!.value);
    formData.append('featured', this.productForm.get('featured')!.value);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.editMode && this.productId) {
      this.productService.updateProduct(this.productId, formData).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (error) => console.error('Error updating product', error)
      });
    } else {
      this.productService.createProduct(formData).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (error) => console.error('Error creating product', error)
      });
    }
  }
}