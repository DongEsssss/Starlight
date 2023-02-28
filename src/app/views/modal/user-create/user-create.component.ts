import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent extends DefaultModalComponent<User>{
  username!:string;

}
