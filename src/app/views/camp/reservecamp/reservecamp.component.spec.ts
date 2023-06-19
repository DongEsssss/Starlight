import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservecampComponent } from './reservecamp.component';

describe('ReservecampComponent', () => {
  let component: ReservecampComponent;
  let fixture: ComponentFixture<ReservecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservecampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
