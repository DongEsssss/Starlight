import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecardComponent } from './usecard.component';

describe('UsecardComponent', () => {
  let component: UsecardComponent;
  let fixture: ComponentFixture<UsecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
