import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  transaccion!: Transaction; 
  constructor(private activatedRoute: ActivatedRoute,
              private transaccionService: TransactionService,
              private router: Router
  ) {
    this.iniciarVariable();

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.iniciarVariable();
      } 
    });
  }

  iniciarVariable() {
    this.transaccion = new Transaction();
  }
  registrarTransaccion(){
    this.transaccionService.createTransaction(this.transaccion).subscribe(

      (result)=>{
        console.log (result); 
        if (result.status==1){
          alert ("La transaccion se agrego correctamente"); 
          this.router.navigate (['transaccion']); 
        }
      }, 
      (error)=>{
        alert("Ha ocurrido un error"); 
      }
    )
  }

}
