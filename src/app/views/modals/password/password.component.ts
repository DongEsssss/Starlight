import { Component } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent extends DefaultFormComponent<User>{
  reg : string = `/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/`;
  password1 !: string;
  password2 !: string;
  password3 !: string;

  close1(){
    alert("비밀번호가 변경되었습니다.");
    this.opened = false;
    window.location.reload();
  }

  override resetFormState(){
    this.validationStateMap = {
      "password1": true,
      "password2": true,
      "password3": true,
    };
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new User();
  }
}
