import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPostaComponent } from './listado-posta.component';

describe('ListadoPostaComponent', () => {
  let component: ListadoPostaComponent;
  let fixture: ComponentFixture<ListadoPostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
