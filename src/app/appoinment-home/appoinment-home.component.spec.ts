import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentHomeComponent } from './appoinment-home.component';

describe('AppoinmentHomeComponent', () => {
  let component: AppoinmentHomeComponent;
  let fixture: ComponentFixture<AppoinmentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
