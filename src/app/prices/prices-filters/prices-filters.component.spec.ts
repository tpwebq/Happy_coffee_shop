import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesFiltersComponent } from './prices-filters.component';

describe('PricesFiltersComponent', () => {
  let component: PricesFiltersComponent;
  let fixture: ComponentFixture<PricesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
