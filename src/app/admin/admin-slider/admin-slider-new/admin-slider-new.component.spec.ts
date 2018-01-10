import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliderNewComponent } from './admin-slider-new.component';

describe('AdminSliderNewComponent', () => {
  let component: AdminSliderNewComponent;
  let fixture: ComponentFixture<AdminSliderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSliderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSliderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
