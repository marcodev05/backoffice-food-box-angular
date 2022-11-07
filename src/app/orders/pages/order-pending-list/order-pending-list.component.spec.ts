import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPendingListComponent } from './order-pending-list.component';

describe('OrderPendingListComponent', () => {
  let component: OrderPendingListComponent;
  let fixture: ComponentFixture<OrderPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPendingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
