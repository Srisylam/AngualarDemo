import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryTrendzComponent } from './advisory-trendz.component';

describe('AdvisoryTrendzComponent', () => {
  let component: AdvisoryTrendzComponent;
  let fixture: ComponentFixture<AdvisoryTrendzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryTrendzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryTrendzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
