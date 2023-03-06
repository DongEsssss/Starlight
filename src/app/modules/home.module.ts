import {NgModule} from '@angular/core';
import {SignInComponent} from '../views/page/sign-in/sign-in.component';
import {HomeComponent} from '../views/page/home/home.component';
import {AppComponent} from '../views/page/app/app.component';

/* EDC */
import {CatalogBrowserComponent} from '../views/edc/catalog-browser/catalog-browser.component';
import {ContractAgreementComponent} from '../views/edc/contract-agreement/contract-agreement.component';
import {ContractDefinitionsComponent} from '../views/edc/contract-definitions/contract-definitions.component';
import {PoliciesComponent} from '../views/edc/policies/policies.component';
import {TransferHistoryComponent} from '../views/edc/transfer-history/transfer-history.component';
import {AssetsComponent} from '../views/edc/assets/assets.component';

/** Monitoring */
import {MonitoringComponent} from '../views/monitoring/monitoring.component';

/** MainHome */
import {MainhomeComponent} from '../views/mainhome/mainhome.component';

/**Modal */
import {UserInfoComponent} from "../views/modal/user-info/user-info.component";
import {NoticeComponent} from '../views/modal/notice/notice.component';
import {NoticeBoardComponent} from '../views/modal/notice-board/notice-board.component';
import {PasswordChangeComponent} from '../views/modal/password-change/password-change.component';
import {CreateAssetComponent} from '../views/modal/create-asset/create-asset.component';
import {CreatePoliciesComponent} from '../views/modal/create-policies/create-policies.component';
import {CreateDefinitionsComponent} from '../views/modal/create-definitions/create-definitions.component';
import {DeleteComponent} from '../views/modal/delete/delete.component';
import {UserCreateComponent} from '../views/modal/user-create/user-create.component';
import {CompanyInfoComponent} from '../views/modal/company-info/company-info.component';
import {UserEditComponent} from '../views/modal/user-edit/user-edit.component';

/** configuration */
import {SettingComponent} from '../views/configuration/setting/setting.component';
import {UrFormComponent} from '../views/configuration/company/ur-form/ur-form.component';
import {CpFormComponent} from '../views/configuration/company/cp-form/cp-form.component';
import {UserComponent} from '../views/configuration/user/user.component';
import {CompanyComponent} from '../views/configuration/company/company.component';

import {ClarityModule} from '@clr/angular';
import {InlineAlertComponent} from "../components/inline-alert/inline-alert.component";
import {CommonServiceService} from '../services/common/common.service.service';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from './shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    MainhomeComponent,
    CatalogBrowserComponent,
    ContractAgreementComponent,
    ContractDefinitionsComponent,
    PoliciesComponent,
    TransferHistoryComponent,
    AssetsComponent,
    MonitoringComponent,
    UserInfoComponent,
    NoticeComponent,
    PasswordChangeComponent,
    CreateAssetComponent,
    InlineAlertComponent,
    CreateDefinitionsComponent,
    CreatePoliciesComponent,
    DeleteComponent,
    SettingComponent,
    CompanyComponent,
    UrFormComponent,
    CpFormComponent,
    NoticeBoardComponent,
    UserCreateComponent,
    UserComponent,
    CompanyInfoComponent,
    UserEditComponent
  ],
  providers: [CommonServiceService],
  imports: [
    HomeRoutingModule,
    SharedModule,
    ClarityModule
  ]
})
export class HomeModule {
}