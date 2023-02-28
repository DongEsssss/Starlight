import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from '../views/edc/assets/assets.component';
import { CatalogBrowserComponent } from '../views/edc/catalog-browser/catalog-browser.component';
import { ContractDefinitionsComponent } from '../views/edc/contract-definitions/contract-definitions.component';
import { ContractAgreementComponent } from '../views/edc/contract-agreement/contract-agreement.component';
import { PoliciesComponent } from '../views/edc/policies/policies.component';
import { TransferHistoryComponent } from '../views/edc/transfer-history/transfer-history.component';

import { MonitoringComponent } from '../views/monitoring/monitoring.component';
import { HomeComponent } from '../views/page/home/home.component';
import { SignInComponent } from '../views/page/sign-in/sign-in.component';
import { MainhomeComponent } from '../views/mainhome/mainhome.component';
import { CompanyComponent } from '../views/configuration/company/company.component';
import { SettingComponent } from '../views/configuration/setting/setting.component';
import { UserComponent } from '../views/configuration/user/user.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'mainhome',
      component: MainhomeComponent
    },
    {
      path: 'catalogbrowser',
      component: CatalogBrowserComponent
    },
    {
      path: 'contracts-agreement',
      component: ContractAgreementComponent
    },
    {
      path: 'transferhistory',
      component: TransferHistoryComponent
    },
    {
      path: 'monitoring',
      component: MonitoringComponent
    },
    {
      path: 'policies',
      component: PoliciesComponent
    },
    {
      path: 'assets',
      component: AssetsComponent
    },
    {
      path: 'monitoring',
      component: MonitoringComponent
    },
    {
      path: 'contractdefinitions',
      component: ContractDefinitionsComponent
    },
    {
      path: 'company',
      component: CompanyComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    },
    {
      path: 'user',
      component: UserComponent
    }
  ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }