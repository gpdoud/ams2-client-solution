import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPrintDepartmentComponent } from './asset-print-department.component';

describe('AssetPrintDepartmentComponent', () => {
  let component: AssetPrintDepartmentComponent;
  let fixture: ComponentFixture<AssetPrintDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPrintDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPrintDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
