import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { InlineAlertComponent } from '../components/inline-alert/inline-alert.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './shared.module';
import { HomeComponent } from '../views/page/home/home.component';

/** MainHome */
import { MainhomeComponent } from '../views/mainhome/mainhome.component';
import { OceanComponent } from '../views/mainhome/area/ocean/ocean.component';
import { GlampingComponent } from '../views/mainhome/area/glamping/glamping.component';
import { MountainComponent } from '../views/mainhome/area/mountain/mountain.component';
import { HotSNSComponent } from '../views/mainhome/area/hot-sns/hot-sns.component';

/** configuration */
import { SettingComponent } from '../views/configuration/setting/setting.component';
import { CpFormComponent } from '../views/configuration/company/cp-form/cp-form.component';
import { CompanyComponent } from '../views/configuration/company/company.component';
import { CallComponent } from '../views/configuration/call/call.component';

// event
import { EventComponent } from '../views/event/event.component';
import { ProceedingComponent } from '../views/event/proceeding/proceeding.component';
import { EndComponent } from '../views/event/end/end.component';

//User
import { UserComponent } from '../views/configuration/user/user.component';
import { TodoComponent } from '../views/configuration/user/todo/todo.component';
import { TodoFormComponent } from '../views/configuration/user/todo-form/todo-form.component';
import { TodoListComponent } from '../views/configuration/user/todo-list/todo-list.component';
import { MySnsComponent } from '../views/configuration/user/my-sns/my-sns.component';
import { UsecardComponent } from '../views/configuration/user/usecard/usecard.component';

//modal
import { CardComponent } from '../views/modals/card/card.component';
import { InfoSetComponent } from '../views/modals/info-set/info-set.component';
import { NoticeComponent } from '../views/modals/notice/notice.component';
import { InfoComponent } from '../views/modals/info/info.component';
import { PasswordComponent } from '../views/modals/password/password.component';
import { LikecampComponent } from '../views/modals/likecamp/likecamp.component';
import { Dudwnwmd1Component } from '../views/modals/dudwnwmd1/dudwnwmd1.component';
import { Dudtnwmd2Component } from '../views/modals/dudtnwmd2/dudtnwmd2.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainhomeComponent,
    OceanComponent,
    GlampingComponent,
    MountainComponent,
    HotSNSComponent,
    EventComponent,
    ProceedingComponent,
    EndComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    MySnsComponent,
    UsecardComponent,
    InlineAlertComponent,
    SettingComponent,
    CompanyComponent,
    CpFormComponent,
    UserComponent,
    CardComponent,
    InfoComponent,
    InfoSetComponent,
    NoticeComponent,
    PasswordComponent,
    LikecampComponent,
    Dudwnwmd1Component,
    Dudtnwmd2Component,
    CallComponent
  ],
  providers: [],
  imports: [HomeRoutingModule, SharedModule, ClarityModule],
})
export class HomeModule {}
