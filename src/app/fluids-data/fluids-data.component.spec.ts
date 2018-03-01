import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidsDataComponent } from './fluids-data.component';

describe('FluidsDataComponent', () => {
  let component: FluidsDataComponent;
  let fixture: ComponentFixture<FluidsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
