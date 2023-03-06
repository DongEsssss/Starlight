import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UrFormComponent} from './ur-form.component';

describe('UrFormComponent', () => {
  let component: UrFormComponent;
  let fixture: ComponentFixture<UrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
