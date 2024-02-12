import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesComponent } from './nes.component';

describe('NesComponent', () => {
  let component: NesComponent;
  let fixture: ComponentFixture<NesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
