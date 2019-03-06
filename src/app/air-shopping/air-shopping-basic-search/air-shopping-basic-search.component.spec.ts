import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirShoppingBasicSearchComponent } from './air-shopping-basic-search.component';

describe('AirShoppingBasicSearchComponent', () => {
  let component: AirShoppingBasicSearchComponent;
  let fixture: ComponentFixture<AirShoppingBasicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirShoppingBasicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirShoppingBasicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
