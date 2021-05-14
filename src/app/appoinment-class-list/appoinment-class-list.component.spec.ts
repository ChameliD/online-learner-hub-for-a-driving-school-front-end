import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentClassListComponent } from './appoinment-class-list.component';

describe('AppoinmentClassListComponent', () => {
  let component: AppoinmentClassListComponent;
  let fixture: ComponentFixture<AppoinmentClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentClassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
