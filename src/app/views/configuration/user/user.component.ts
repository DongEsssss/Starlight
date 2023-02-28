import { Component,OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { UserEditComponent } from '../../modal/user-edit/user-edit.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends DefaultComponent implements OnInit{

  @ViewChild('useredit', {static:false}) UserEdit !: UserEditComponent
  onEdit(){
    this.UserEdit.open();
  }

}
