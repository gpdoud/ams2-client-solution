import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentByAssetComponent } from './department-by-asset.component';

describe('DepartmentByAssetComponent', () => {
  let component: DepartmentByAssetComponent;
  let fixture: ComponentFixture<DepartmentByAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentByAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentByAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
