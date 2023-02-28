import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends DefaultModalComponent<User>{

}
