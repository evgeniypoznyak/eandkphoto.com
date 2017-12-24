import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsYearsComponent } from './multi-items-years.component';

describe('MultiItemsYearsComponent', () => {
  let component: MultiItemsYearsComponent;
  let fixture: ComponentFixture<MultiItemsYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
