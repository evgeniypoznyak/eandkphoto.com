import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsEventsComponent } from './multi-items-events.component';

describe('MultiItemsEventsComponent', () => {
  let component: MultiItemsEventsComponent;
  let fixture: ComponentFixture<MultiItemsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
