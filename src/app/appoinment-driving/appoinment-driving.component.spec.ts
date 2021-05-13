import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentDrivingComponent } from './appoinment-driving.component';

describe('AppoinmentDrivingComponent', () => {
  let component: AppoinmentDrivingComponent;
  let fixture: ComponentFixture<AppoinmentDrivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentDrivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentDrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
