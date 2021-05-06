import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppoinmentsComponent } from './update-appoinments.component';

describe('UpdateAppoinmentsComponent', () => {
  let component: UpdateAppoinmentsComponent;
  let fixture: ComponentFixture<UpdateAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
