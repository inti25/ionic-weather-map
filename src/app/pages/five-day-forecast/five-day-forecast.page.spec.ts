import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayForecastPage } from './five-day-forecast.page';

describe('FiveDayForecastPage', () => {
  let component: FiveDayForecastPage;
  let fixture: ComponentFixture<FiveDayForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveDayForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDayForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
