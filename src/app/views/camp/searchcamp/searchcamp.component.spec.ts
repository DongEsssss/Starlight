import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcampComponent } from './searchcamp.component';

describe('SearchcampComponent', () => {
  let component: SearchcampComponent;
  let fixture: ComponentFixture<SearchcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
