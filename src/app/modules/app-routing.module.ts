import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_NAME} from '../utils/shared.utils';

const routes: Routes = [{
  path: '', redirectTo: APP_NAME, pathMatch: 'full'
}, {
  path: APP_NAME + '/account',
  loadChildren: () => import('../modules/login.module').then(m => m.LoginModule)
}, {
  path: APP_NAME + '/home',
  loadChildren: () => import('../modules/home.module').then(m => m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
