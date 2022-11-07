import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersShippingComponent } from './orders-shipping.component';

describe('OrdersShippingComponent', () => {
  let component: OrdersShippingComponent;
  let fixture: ComponentFixture<OrdersShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
