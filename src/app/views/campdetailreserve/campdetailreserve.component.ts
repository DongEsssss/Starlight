import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { reserve } from 'src/app/models/Reserve';

@Component({
  selector: 'app-campdetailreserve',
  templateUrl: './campdetailreserve.component.html',
  styleUrls: ['./campdetailreserve.component.css'],
})
export class CampdetailreserveComponent extends DefaultFormComponent<reserve> {
  reserveList: reserve[] = [];
  @Input() override item: any;
  @Input() override id: any;

  ngOnChanges(): void {
    if (this.item) {
      this.reserveList[0] = this.item;
    }
  }

  delete(id: any) {
    this.restService.deletereserve(id).subscribe({
      next: () => {
        this.item;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () =>
        console.info(`reserveList ID : ${id} Reserve Delete Complete`),
    });
    this.close();
    this.onRefresh();
  }
}
