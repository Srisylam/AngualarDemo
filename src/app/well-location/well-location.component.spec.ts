import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellLocationComponent } from './well-location.component';

describe('WellLocationComponent', () => {
  let component: WellLocationComponent;
  let fixture: ComponentFixture<WellLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
