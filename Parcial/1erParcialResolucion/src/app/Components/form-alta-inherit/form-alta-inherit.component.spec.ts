import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaInheritComponent } from './form-alta-inherit.component';

describe('FormAltaInheritComponent', () => {
  let component: FormAltaInheritComponent;
  let fixture: ComponentFixture<FormAltaInheritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAltaInheritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaInheritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
