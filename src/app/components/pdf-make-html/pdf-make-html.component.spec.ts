import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMakeHtmlComponent } from './pdf-make-html.component';

describe('PdfMakeHtmlComponent', () => {
  let component: PdfMakeHtmlComponent;
  let fixture: ComponentFixture<PdfMakeHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfMakeHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMakeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
