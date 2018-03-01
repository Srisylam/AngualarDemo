import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellboreDataComponent } from './wellbore-data.component';

describe('WellboreDataComponent', () => {
  let component: WellboreDataComponent;
  let fixture: ComponentFixture<WellboreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellboreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellboreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
