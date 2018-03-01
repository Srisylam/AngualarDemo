import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderScheduleComponent } from './work-order-schedule.component';

describe('WorkOrderScheduleComponent', () => {
  let component: WorkOrderScheduleComponent;
  let fixture: ComponentFixture<WorkOrderScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
