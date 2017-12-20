import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMonthMenuComponent } from './event-month-menu.component';

describe('EventMonthMenuComponent', () => {
  let component: EventMonthMenuComponent;
  let fixture: ComponentFixture<EventMonthMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMonthMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMonthMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
