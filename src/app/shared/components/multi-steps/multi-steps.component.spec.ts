import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepsComponent } from './multi-steps.component';

describe('MultiStepsComponent', () => {
  let component: MultiStepsComponent;
  let fixture: ComponentFixture<MultiStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
