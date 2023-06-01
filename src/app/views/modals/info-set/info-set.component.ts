import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-info-set',
  templateUrl: './info-set.component.html',
  styleUrls: ['./info-set.component.css']
})
export class InfoSetComponent extends DefaultModalComponent<User>{

  close1(){
    alert("정보가 수정되었습니다.");
    this.opened = false;
    window.location.reload();
  }
}
