import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventYearMenuComponent } from './event-year-menu.component';

describe('EventYearMenuComponent', () => {
  let component: EventYearMenuComponent;
  let fixture: ComponentFixture<EventYearMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventYearMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventYearMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
