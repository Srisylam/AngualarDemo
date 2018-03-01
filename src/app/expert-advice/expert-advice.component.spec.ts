import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAdviceComponent } from './expert-advice.component';

describe('ExpertAdviceComponent', () => {
  let component: ExpertAdviceComponent;
  let fixture: ComponentFixture<ExpertAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
