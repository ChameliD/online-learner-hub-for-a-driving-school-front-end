import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentErrorsComponent } from './appoinment-errors.component';

describe('AppoinmentErrorsComponent', () => {
  let component: AppoinmentErrorsComponent;
  let fixture: ComponentFixture<AppoinmentErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
