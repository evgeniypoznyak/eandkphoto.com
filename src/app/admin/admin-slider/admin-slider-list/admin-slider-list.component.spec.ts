import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliderListComponent } from './admin-slider-list.component';

describe('AdminSliderListComponent', () => {
  let component: AdminSliderListComponent;
  let fixture: ComponentFixture<AdminSliderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSliderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSliderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
