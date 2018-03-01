import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirDataComponent } from './reservoir-data.component';

describe('ReservoirDataComponent', () => {
  let component: ReservoirDataComponent;
  let fixture: ComponentFixture<ReservoirDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservoirDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
