import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentClassesComponent } from './appoinment-classes.component';

describe('AppoinmentClassesComponent', () => {
  let component: AppoinmentClassesComponent;
  let fixture: ComponentFixture<AppoinmentClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
