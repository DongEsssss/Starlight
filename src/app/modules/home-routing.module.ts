import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../views/page/home/home.component';
import { MainhomeComponent } from '../views/mainhome/mainhome.component';
import { CompanyComponent } from '../views/configuration/company/company.component';
import { SettingComponent } from '../views/configuration/setting/setting.component';
import { UserComponent } from '../views/configuration/user/user.component';

import { EventComponent } from '../views/event/event.component';
import { CallComponent } from '../views/configuration/call/call.component';
import { OneononeComponent } from '../views/configuration/oneonone/oneonone.component';
import { AboutcampComponent } from '../views/camp/aboutcamp/aboutcamp.component';
import { SearchcampComponent } from '../views/camp/searchcamp/searchcamp.component';
import { ReservecampComponent } from '../views/camp/reservecamp/reservecamp.component';
import { CafeComponent } from '../views/cafe/cafe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mainhome',
        component: MainhomeComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
      {
        path: 'cafe',
        component: CafeComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'call',
        component: CallComponent,
      },
      {
        path: 'oneonone',
        component: OneononeComponent,
      },
      {
        path: 'about',
        component: AboutcampComponent,
      },
      {
        path: 'search',
        component: SearchcampComponent,
      },
      {
        path: 'reserve',
        component: ReservecampComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
