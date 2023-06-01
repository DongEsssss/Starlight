import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { User } from 'src/app/models/user';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent extends DefaultModalComponent<User>{
  infos = user;
}
