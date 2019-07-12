import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePrintComponent } from './insurance-print.component';

describe('InsurancePrintComponent', () => {
  let component: InsurancePrintComponent;
  let fixture: ComponentFixture<InsurancePrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancePrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
