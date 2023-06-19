import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEnrollmentComponent } from './no-enrollment.component';

describe('NoEnrollmentComponent', () => {
  let component: NoEnrollmentComponent;
  let fixture: ComponentFixture<NoEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
