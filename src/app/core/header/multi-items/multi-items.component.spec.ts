import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsComponent } from './multi-items.component';

describe('MultiItemsComponent', () => {
  let component: MultiItemsComponent;
  let fixture: ComponentFixture<MultiItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
