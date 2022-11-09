import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererListComponent } from './deliverer-list.component';

describe('DelivererListComponent', () => {
  let component: DelivererListComponent;
  let fixture: ComponentFixture<DelivererListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivererListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
