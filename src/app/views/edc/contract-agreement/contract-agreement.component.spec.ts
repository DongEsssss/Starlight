import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContractAgreementComponent} from './contract-agreement.component';

describe('ContractAgreementComponent', () => {
  let component: ContractAgreementComponent;
  let fixture: ComponentFixture<ContractAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractAgreementComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContractAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
