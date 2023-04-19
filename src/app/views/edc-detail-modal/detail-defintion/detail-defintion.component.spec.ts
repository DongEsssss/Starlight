import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDefintionComponent } from './detail-defintion.component';

describe('DetailDefintionComponent', () => {
  let component: DetailDefintionComponent;
  let fixture: ComponentFixture<DetailDefintionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDefintionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDefintionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
