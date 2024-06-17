import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.transactionForm = this.fb.group({
      monedaOrigen: ['', Validators.required],
      cantidadOrigen: ['', Validators.required],
      monedaDestino: ['', Validators.required],
      cantidadDestino: ['', Validators.required],
      emailCliente: ['', [Validators.required, Validators.email]],
      tasaConversion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.transactionService.createTransaction(this.transactionForm.value).subscribe(
        response => {
          console.log('Transaction created', response);
          this.router.navigate(['/transactions']);
        },
        error => {
          console.error('Error creating transaction', error);
        }
      );
    }
  }
}
