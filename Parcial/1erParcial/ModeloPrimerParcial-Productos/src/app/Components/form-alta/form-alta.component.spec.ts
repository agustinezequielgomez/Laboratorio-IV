import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaComponent } from './form-alta.component';

describe('FormAltaComponent', () => {
  let component: FormAltaComponent;
  let fixture: ComponentFixture<FormAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
