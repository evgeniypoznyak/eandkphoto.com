import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsMonthsComponent } from './multi-items-months.component';

describe('MultiItemsMonthsComponent', () => {
  let component: MultiItemsMonthsComponent;
  let fixture: ComponentFixture<MultiItemsMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
