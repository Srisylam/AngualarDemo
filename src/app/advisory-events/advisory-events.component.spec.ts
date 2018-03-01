import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryEventsComponent } from './advisory-events.component';

describe('AdvisoryEventsComponent', () => {
  let component: AdvisoryEventsComponent;
  let fixture: ComponentFixture<AdvisoryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
