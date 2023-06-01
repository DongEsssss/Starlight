import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { User, user } from 'src/app/models/user';
import { PasswordComponent } from '../../modals/password/password.component';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { InfoSetComponent } from '../../modals/info-set/info-set.component';
import { CardComponent } from '../../modals/card/card.component';
import { LikecampComponent } from '../../modals/likecamp/likecamp.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends DefaultFormComponent<User>{
  @ViewChild('passwordchange', {static: false}) passwords !: PasswordComponent
  @ViewChild('infochange', {static: false}) infoedits !: InfoSetComponent
  @ViewChild('card', {static: false}) card !: CardComponent
  @ViewChild('like', {static: false}) likes !: LikecampComponent
  infos = user;

  password() {
    this.passwords.open();
  }
  infoedit(){
    this.infoedits.open();
  }
  creditcard(){
    this.card.open()
  }
  likecamp(){
    this.likes.open();
  }
}

