import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorCreateComponent } from './espectador-create.component';

describe('EspectadorCreateComponent', () => {
  let component: EspectadorCreateComponent;
  let fixture: ComponentFixture<EspectadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspectadorCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspectadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
