import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWellDashboardComponent } from './all-well-dashboard.component';

describe('AllWellDashboardComponent', () => {
  let component: AllWellDashboardComponent;
  let fixture: ComponentFixture<AllWellDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWellDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWellDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
