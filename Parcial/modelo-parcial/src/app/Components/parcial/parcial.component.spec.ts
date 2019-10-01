import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialComponent } from './parcial.component';

describe('ParcialComponent', () => {
  let component: ParcialComponent;
  let fixture: ComponentFixture<ParcialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
