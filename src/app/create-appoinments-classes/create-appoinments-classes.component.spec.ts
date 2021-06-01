import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppoinmentsClassesComponent } from './create-appoinments-classes.component';

describe('CreateAppoinmentsClassesComponent', () => {
  let component: CreateAppoinmentsClassesComponent;
  let fixture: ComponentFixture<CreateAppoinmentsClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppoinmentsClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppoinmentsClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
