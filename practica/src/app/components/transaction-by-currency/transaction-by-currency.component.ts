import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-by-currency',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './transaction-by-currency.component.html',
  styleUrl: './transaction-by-currency.component.css'
})
export class TransactionByCurrencyComponent {

  monedaOrigen: string = '';
  monedaDestino: string = '';
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  getTransactions() {
    this.transactionService.getTransactionsByCurrency(this.monedaOrigen, this.monedaDestino).subscribe(data => {
      this.transactions = data;
    });
  }
}
