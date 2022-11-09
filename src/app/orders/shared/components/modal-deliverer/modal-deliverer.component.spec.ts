import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDelivererComponent } from './modal-deliverer.component';

describe('ModalDelivererComponent', () => {
  let component: ModalDelivererComponent;
  let fixture: ComponentFixture<ModalDelivererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDelivererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
