import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillPage } from './form-fill.page';

describe('FormFillPage', () => {
  let component: FormFillPage;
  let fixture: ComponentFixture<FormFillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
