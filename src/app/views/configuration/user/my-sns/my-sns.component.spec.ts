import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnsComponent } from './my-sns.component';

describe('MySnsComponent', () => {
  let component: MySnsComponent;
  let fixture: ComponentFixture<MySnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
