import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractKpiComponent } from './contract-kpi.component';

describe('ContractKpiComponent', () => {
  let component: ContractKpiComponent;
  let fixture: ComponentFixture<ContractKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
