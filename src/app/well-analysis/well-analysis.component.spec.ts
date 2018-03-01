import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellAnalysisComponent } from './well-analysis.component';

describe('WellAnalysisComponent', () => {
  let component: WellAnalysisComponent;
  let fixture: ComponentFixture<WellAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
