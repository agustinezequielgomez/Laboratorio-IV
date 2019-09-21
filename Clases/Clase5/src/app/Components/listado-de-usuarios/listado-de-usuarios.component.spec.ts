import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeUsuariosComponent } from './listado-de-usuarios.component';

describe('ListadoDeUsuariosComponent', () => {
  let component: ListadoDeUsuariosComponent;
  let fixture: ComponentFixture<ListadoDeUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
