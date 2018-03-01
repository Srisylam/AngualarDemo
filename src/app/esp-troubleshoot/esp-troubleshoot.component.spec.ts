import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspTroubleshootComponent } from './esp-troubleshoot.component';

describe('EspTroubleshootComponent', () => {
  let component: EspTroubleshootComponent;
  let fixture: ComponentFixture<EspTroubleshootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspTroubleshootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspTroubleshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
