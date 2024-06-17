import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionByEmailComponent } from './transaction-by-email.component';

describe('TransactionByEmailComponent', () => {
  let component: TransactionByEmailComponent;
  let fixture: ComponentFixture<TransactionByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionByEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
