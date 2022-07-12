import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMakeTestComponent } from './pdf-make-test.component';

describe('PdfMakeTestComponent', () => {
  let component: PdfMakeTestComponent;
  let fixture: ComponentFixture<PdfMakeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfMakeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMakeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
