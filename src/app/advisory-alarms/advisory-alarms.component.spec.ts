import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryAlarmsComponent } from './advisory-alarms.component';

describe('AdvisoryAlarmsComponent', () => {
  let component: AdvisoryAlarmsComponent;
  let fixture: ComponentFixture<AdvisoryAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
