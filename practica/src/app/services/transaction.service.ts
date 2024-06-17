import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:3000/api/transactions';

  constructor(private http: HttpClient) { }

  createTransaction(transaction: Transaction): Observable<any> {
    return this.http.post(`${this.baseUrl}`, transaction);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}`);
  }

  getTransactionsByEmail(email: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/email/${email}`);
  }

  getTransactionsByCurrency(monedaOrigen: string, monedaDestino: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/currency/${monedaOrigen}/${monedaDestino}`);
  }
}
