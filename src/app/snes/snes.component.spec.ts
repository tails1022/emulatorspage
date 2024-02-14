import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnesComponent } from './snes.component';

describe('SnesComponent', () => {
  let component: SnesComponent;
  let fixture: ComponentFixture<SnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
