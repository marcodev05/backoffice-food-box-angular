import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderActiveListComponent } from './order-active-list.component';

describe('OrderActiveListComponent', () => {
  let component: OrderActiveListComponent;
  let fixture: ComponentFixture<OrderActiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderActiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
