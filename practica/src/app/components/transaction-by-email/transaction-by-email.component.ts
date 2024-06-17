import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-by-email',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transaction-by-email.component.html',
  styleUrl: './transaction-by-email.component.css'
})
export class TransactionByEmailComponent {

  email: string = '';
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  getTransactions() {
    this.transactionService.getTransactionsByEmail(this.email).subscribe(data => {
      this.transactions = data;
    });
  }
}