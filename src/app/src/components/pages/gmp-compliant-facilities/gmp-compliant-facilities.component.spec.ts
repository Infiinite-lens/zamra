import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpCompliantFacilitiesComponent } from './gmp-compliant-facilities.component';

describe('GmpCompliantFacilitiesComponent', () => {
  let component: GmpCompliantFacilitiesComponent;
  let fixture: ComponentFixture<GmpCompliantFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmpCompliantFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmpCompliantFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
