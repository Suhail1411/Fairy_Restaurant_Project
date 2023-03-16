import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentInfoComponent } from './view-payment-info.component';

describe('ViewPaymentInfoComponent', () => {
  let component: ViewPaymentInfoComponent;
  let fixture: ComponentFixture<ViewPaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
