import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemsLvlOneComponent } from './multi-items-lvl-one.component';

describe('MultiItemsLvlOneComponent', () => {
  let component: MultiItemsLvlOneComponent;
  let fixture: ComponentFixture<MultiItemsLvlOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiItemsLvlOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiItemsLvlOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
