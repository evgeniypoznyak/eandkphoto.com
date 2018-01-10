import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliderIdComponent } from './admin-slider-id.component';

describe('AdminSliderIdComponent', () => {
  let component: AdminSliderIdComponent;
  let fixture: ComponentFixture<AdminSliderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSliderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSliderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
