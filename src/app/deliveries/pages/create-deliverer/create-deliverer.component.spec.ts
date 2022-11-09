import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDelivererComponent } from './create-deliverer.component';

describe('CreateDelivererComponent', () => {
  let component: CreateDelivererComponent;
  let fixture: ComponentFixture<CreateDelivererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDelivererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
