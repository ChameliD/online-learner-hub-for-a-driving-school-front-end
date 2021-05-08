import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAFormComponent } from './q-a-form.component';

describe('QAFormComponent', () => {
  let component: QAFormComponent;
  let fixture: ComponentFixture<QAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
