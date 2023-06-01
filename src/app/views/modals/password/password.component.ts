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
  npassword2?:string;
  reg : string = `/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/`;
  show1 = false;
  show2 = false;
  show3 = false;

  close1(){
    alert("비밀번호가 변경되었습니다.");
    this.opened = false;
    window.location.reload();
  }
}
