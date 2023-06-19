import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafedetailComponent } from './cafedetail.component';

describe('CafedetailComponent', () => {
  let component: CafedetailComponent;
  let fixture: ComponentFixture<CafedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
