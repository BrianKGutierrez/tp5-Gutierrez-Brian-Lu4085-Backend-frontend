import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionByCurrencyComponent } from './transaction-by-currency.component';

describe('TransactionByCurrencyComponent', () => {
  let component: TransactionByCurrencyComponent;
  let fixture: ComponentFixture<TransactionByCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionByCurrencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionByCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
