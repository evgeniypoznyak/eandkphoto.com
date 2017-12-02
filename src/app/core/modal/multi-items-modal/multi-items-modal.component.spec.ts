import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsModalComponent } from './multi-items-modal.component';

describe('MultiItemsModalComponent', () => {
  let component: MultiItemsModalComponent;
  let fixture: ComponentFixture<MultiItemsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
