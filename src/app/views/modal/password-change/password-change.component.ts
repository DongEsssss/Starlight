import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { PasswordSetting } from 'src/app/models/PasswordSetting';
import { InlineAlertComponent } from 'src/app/components/inline-alert/inline-alert.component';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent extends DefaultModalComponent<PasswordSetting> {
  current_password !: string;
  new_password !: string;
  comfirm_password !: string;

  pattern : string = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{10,30}$"


}
