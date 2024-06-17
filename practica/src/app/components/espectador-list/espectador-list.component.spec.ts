import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorListComponent } from './espectador-list.component';

describe('EspectadorListComponent', () => {
  let component: EspectadorListComponent;
  let fixture: ComponentFixture<EspectadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspectadorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspectadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
