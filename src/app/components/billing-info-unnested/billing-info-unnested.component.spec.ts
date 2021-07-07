import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInfoUnnestedComponent } from './billing-info-unnested.component';

describe('BillingInfoUnnestedComponent', () => {
  let component: BillingInfoUnnestedComponent;
  let fixture: ComponentFixture<BillingInfoUnnestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingInfoUnnestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoUnnestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
