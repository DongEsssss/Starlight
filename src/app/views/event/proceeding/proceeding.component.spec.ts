import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedingComponent } from './proceeding.component';

describe('ProceedingComponent', () => {
  let component: ProceedingComponent;
  let fixture: ComponentFixture<ProceedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
