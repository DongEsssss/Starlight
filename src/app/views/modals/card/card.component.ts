import { Component, OnInit } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { Card } from 'src/app/models/Card';
import * as cardValidator from "card-validator";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends DefaultModalComponent<Card> implements OnInit {
  public name: string;
  public cvv: string;
  public cardNumber: string;
  public flipped: boolean;

  public maxLength: number;
  public maxCvvLength: number;

  public validationRes;

  public imask = {mask:'0000'};


  override ngOnInit() {}

  onFocusCVV() {
    this.flipped = true;
  }

  onBlurCVV() {
    this.flipped = false;
  }

  validate() {
    this.validationRes = cardValidator.number(this.cardNumber);
    console.log(this.validationRes);
    if (this.validationRes.card) {
      this.maxLength = this.validationRes.card?.lengths?.pop() + this.validationRes.card?.gaps.length;
      this.maxCvvLength = this.validationRes.card?.code.size;
      let maskArray = new Array(this.maxLength).fill('0');
      this.validationRes.card?.gaps.reverse().forEach(gap=> {maskArray.splice(gap, 0, ' ');})
      this.imask = {mask:maskArray.join('')}
    } else {
      this.maxLength = 255;
    }
  }

  getIssuerIcon() {
    return `https://cdn.flnf.hu/assets/${this.validationRes.card.type}.svg`
  }

  close1(){
    alert("결제수단이 변경되었습니다.");
    this.opened = false;
    window.location.reload();
  }

}
