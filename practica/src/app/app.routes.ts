import { Routes } from '@angular/router';
import { SectorComponent } from './components/sector/sector.component';
import { SectorFormComponent } from './components/sector-form/sector-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionByEmailComponent } from './components/transaction-by-email/transaction-by-email.component';
import { TransactionByCurrencyComponent } from './components/transaction-by-currency/transaction-by-currency.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { EspectadorDetailComponent } from './components/espectador-detail/espectador-detail.component';
import { EspectadorListComponent } from './components/espectador-list/espectador-list.component';
import { EspectadorCreateComponent } from './components/espectador-create/espectador-create.component';


export const routes: Routes = [
{
    path:'sector',
    component:SectorComponent

},

{
    path:'sectorform/:id',
    component:SectorFormComponent,

},
// esto es para que cuando me equivoque de poner el link se dirija al home


{ path: 'products', component: ProductListComponent },
{ path: 'products/new', component: ProductFormComponent },
{ path: 'products/edit/:id', component: ProductFormComponent },
{
    path: 'products/featured',
    component: FeaturedProductsComponent // Nueva ruta
  },
  { path: 'transactions/new', component: TransactionFormComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/email', component: TransactionByEmailComponent },
  { path: 'transactions/currency', component: TransactionByCurrencyComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'create-ticket', component: TicketFormComponent },
  { path: 'espectador-list', component: EspectadorListComponent},
  { path: 'espectador-create', component: EspectadorCreateComponent },
  { path: 'espectadores/:id', component: EspectadorDetailComponent },
  

//   { path: 'edit/:id', component: ProductFormComponent }
   

];
