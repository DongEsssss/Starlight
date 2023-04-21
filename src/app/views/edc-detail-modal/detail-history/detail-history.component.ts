import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { Transferhistory } from 'src/app/models/transferhistory';

@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.component.html',
  styleUrls: ['./detail-history.component.css']
})
export class DetailHistoryComponent extends DefaultFormComponent<Transferhistory>{
  historyList : Transferhistory[] = [];

  @Input() override item: any;
  @Input() override id: any;

  ngOnChanges(): void {
    if (this.item) {
      this.historyList[0] = this.item
      console.log(this.historyList[0])
    }
  }
}
