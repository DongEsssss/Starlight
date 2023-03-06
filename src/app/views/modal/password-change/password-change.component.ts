import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {PasswordSetting} from 'src/app/models/PasswordSetting';
import {InlineAlertComponent} from 'src/app/components/inline-alert/inline-alert.component';
import {DefaultFormComponent} from 'src/app/components/default.form.component';
import {HTTP_CODE_SUCCESS} from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent extends DefaultFormComponent<PasswordSetting> {
  npassword2?: string;

  show1 = false;
  show2 = false;
  show3 = false;
  isValid: any;
  inProgress: any;

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new PasswordSetting();
  }

  override ngOnInit(): void {
    this.formData = new PasswordSetting();
  }

  override resetFormState() {
    this.validationStateMap = {
      "password": true,
      "npassword": true,
      "userNm": true,
    };
  }

  create(): void {
    // Double confirm everything is ok
    // Form is valid

    let userFormData = this.modalForm.value;
    this.onGoing = true;

    this.session.updatePassword(userFormData).subscribe((res: any) => {
      this.onGoing = false;
      if (res.code == HTTP_CODE_SUCCESS) {
        this.close();
      } else {
        this.inlineAlert.showInlineError('BAD REQUEST');
      }
    }, err => {
      this.onGoing = false;
      this.inlineAlert.showInlineError('BAD REQUEST');
      console.log(err);
    });
    if (!this.isValid) {
      return;
    }

    // We have new user data
    if (!userFormData) {
      return;
    }
  }

}
