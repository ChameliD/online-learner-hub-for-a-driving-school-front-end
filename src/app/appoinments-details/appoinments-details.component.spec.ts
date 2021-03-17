import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsDetailsComponent } from './appoinments-details.component';

describe('AppoinmentsDetailsComponent', () => {
  let component: AppoinmentsDetailsComponent;
  let fixture: ComponentFixture<AppoinmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
