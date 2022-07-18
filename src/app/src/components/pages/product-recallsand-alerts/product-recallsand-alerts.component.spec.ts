import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecallsandAlertsComponent } from './product-recallsand-alerts.component';

describe('ProductRecallsandAlertsComponent', () => {
  let component: ProductRecallsandAlertsComponent;
  let fixture: ComponentFixture<ProductRecallsandAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRecallsandAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecallsandAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
