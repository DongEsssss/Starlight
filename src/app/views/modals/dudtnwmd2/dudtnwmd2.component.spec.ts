import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dudtnwmd2Component } from './dudtnwmd2.component';

describe('Dudtnwmd2Component', () => {
  let component: Dudtnwmd2Component;
  let fixture: ComponentFixture<Dudtnwmd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dudtnwmd2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dudtnwmd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
