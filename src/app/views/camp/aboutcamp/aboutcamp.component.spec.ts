import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcampComponent } from './aboutcamp.component';

describe('AboutcampComponent', () => {
  let component: AboutcampComponent;
  let fixture: ComponentFixture<AboutcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
