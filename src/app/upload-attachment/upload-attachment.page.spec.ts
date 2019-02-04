import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAttachmentPage } from './upload-attachment.page';

describe('UploadAttachmentPage', () => {
  let component: UploadAttachmentPage;
  let fixture: ComponentFixture<UploadAttachmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAttachmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAttachmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
