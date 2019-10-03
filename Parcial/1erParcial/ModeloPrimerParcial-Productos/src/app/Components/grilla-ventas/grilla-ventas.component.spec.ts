import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaVentasComponent } from './grilla-ventas.component';

describe('GrillaVentasComponent', () => {
  let component: GrillaVentasComponent;
  let fixture: ComponentFixture<GrillaVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
