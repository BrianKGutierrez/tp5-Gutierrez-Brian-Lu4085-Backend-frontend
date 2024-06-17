import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorDetailComponent } from './espectador-detail.component';

describe('EspectadorDetailComponent', () => {
  let component: EspectadorDetailComponent;
  let fixture: ComponentFixture<EspectadorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspectadorDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspectadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
