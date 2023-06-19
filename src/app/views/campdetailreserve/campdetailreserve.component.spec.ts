import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampdetailreserveComponent } from './campdetailreserve.component';

describe('CampdetailreserveComponent', () => {
  let component: CampdetailreserveComponent;
  let fixture: ComponentFixture<CampdetailreserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampdetailreserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampdetailreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
