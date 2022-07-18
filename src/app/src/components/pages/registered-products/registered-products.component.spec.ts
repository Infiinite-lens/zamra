import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredProductsComponent } from './registered-products.component';

describe('RegisteredProductsComponent', () => {
  let component: RegisteredProductsComponent;
  let fixture: ComponentFixture<RegisteredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
