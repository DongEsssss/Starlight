import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../views/page/home/home.component';
import { MainhomeComponent } from '../views/mainhome/mainhome.component';
import { CompanyComponent } from '../views/configuration/company/company.component';
import { SettingComponent } from '../views/configuration/setting/setting.component';
import { UserComponent } from '../views/configuration/user/user.component';

import { EventComponent } from '../views/event/event.component';
import { CallComponent } from '../views/configuration/call/call.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'mainhome',
      component: MainhomeComponent
    },
    {
      path: 'event',
      component: EventComponent
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
    ,
    {
      path: 'call',
      component: CallComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
