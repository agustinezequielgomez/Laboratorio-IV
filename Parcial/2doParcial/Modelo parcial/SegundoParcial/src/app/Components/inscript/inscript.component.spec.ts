import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptComponent } from './inscript.component';

describe('InscriptComponent', () => {
  let component: InscriptComponent;
  let fixture: ComponentFixture<InscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
