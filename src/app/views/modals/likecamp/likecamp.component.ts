import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { Card } from 'src/app/models/Card';
import { data, datas } from 'src/app/models/Favorite';
@Component({
  selector: 'app-likecamp',
  templateUrl: './likecamp.component.html',
  styleUrls: ['./likecamp.component.css']
})
export class LikecampComponent extends DefaultModalComponent<Card>{
  item = datas;
  datas : data[]

  removeData = new EventEmitter();
  public override ngOnInit(): void {
    this.item.forEach((item) => {
      item['liked'] = false;
    });
  }

}
