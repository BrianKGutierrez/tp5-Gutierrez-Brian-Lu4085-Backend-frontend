import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectorComponent } from './components/sector/sector.component';
import { SectorFormComponent } from './components/sector-form/sector-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionByEmailComponent } from './components/transaction-by-email/transaction-by-email.component';
import { TransactionByCurrencyComponent } from './components/transaction-by-currency/transaction-by-currency.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { EspectadorDetailComponent } from './components/espectador-detail/espectador-detail.component';
import { EspectadorListComponent } from './components/espectador-list/espectador-list.component';
import { EspectadorCreateComponent } from './components/espectador-create/espectador-create.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,SectorComponent,SectorFormComponent,ProductListComponent,ProductFormComponent,FeaturedProductsComponent, TransactionListComponent, TransactionByEmailComponent,TransactionByCurrencyComponent,TransactionFormComponent,TicketFormComponent,TicketListComponent,EspectadorDetailComponent,EspectadorListComponent,EspectadorCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';
}
