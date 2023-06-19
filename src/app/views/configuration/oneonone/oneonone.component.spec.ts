import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneononeComponent } from './oneonone.component';

describe('OneononeComponent', () => {
  let component: OneononeComponent;
  let fixture: ComponentFixture<OneononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneononeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
