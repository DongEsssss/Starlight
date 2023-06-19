import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notices1Component } from './notices1.component';

describe('Notices1Component', () => {
  let component: Notices1Component;
  let fixture: ComponentFixture<Notices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notices1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
