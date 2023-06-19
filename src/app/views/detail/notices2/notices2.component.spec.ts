import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notices2Component } from './notices2.component';

describe('Notices2Component', () => {
  let component: Notices2Component;
  let fixture: ComponentFixture<Notices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notices2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
