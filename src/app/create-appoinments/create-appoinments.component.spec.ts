import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppoinmentsComponent } from './create-appoinments.component';

describe('CreateAppoinmentsComponent', () => {
  let component: CreateAppoinmentsComponent;
  let fixture: ComponentFixture<CreateAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
