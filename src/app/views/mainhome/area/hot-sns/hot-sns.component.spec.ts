import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSNSComponent } from './hot-sns.component';

describe('HotSNSComponent', () => {
  let component: HotSNSComponent;
  let fixture: ComponentFixture<HotSNSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSNSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSNSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
