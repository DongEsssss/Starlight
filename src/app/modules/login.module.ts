import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "./shared.module";
import {SignInComponent} from "../views/page/sign-in/sign-in.component";
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  bootstrap: [
    SignInComponent
  ]
})
export class LoginModule {
}
