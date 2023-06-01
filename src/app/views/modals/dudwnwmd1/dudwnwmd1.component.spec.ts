import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dudwnwmd1Component } from './dudwnwmd1.component';

describe('Dudwnwmd1Component', () => {
  let component: Dudwnwmd1Component;
  let fixture: ComponentFixture<Dudwnwmd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dudwnwmd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dudwnwmd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
