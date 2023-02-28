import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDefinitionsComponent } from './contract-definitions.component';

describe('ContractDefinitionsComponent', () => {
  let component: ContractDefinitionsComponent;
  let fixture: ComponentFixture<ContractDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractDefinitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
