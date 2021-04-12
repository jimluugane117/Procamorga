import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavSupComponent } from './barra-nav-sup.component';

describe('BarraNavSupComponent', () => {
  let component: BarraNavSupComponent;
  let fixture: ComponentFixture<BarraNavSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
