import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecampComponent } from './likecamp.component';

describe('LikecampComponent', () => {
  let component: LikecampComponent;
  let fixture: ComponentFixture<LikecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikecampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
