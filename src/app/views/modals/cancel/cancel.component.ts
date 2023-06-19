import { Component,ViewChild, ElementRef, Input } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { inquiry } from 'src/app/models/inquriy';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})


export class CancelComponent extends DefaultFormComponent<inquiry>{
  inquiry: inquiry[] = [];

  @Input() override item: any;
  @Input() override id: any;

  ngOnChanges(): void {
    if (this.item) {
      this.inquiry[0] = this.item
    }
  }

  delete(id: any) {
    this.restService.deleteinquriy(id).subscribe({
      next: () => {
        this.item;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`camp ID : ${id} inquriy Delete Complete`)
    });
    this.close()
    this.onRefresh()
  }
}
