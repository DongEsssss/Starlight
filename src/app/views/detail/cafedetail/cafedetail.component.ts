import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { cafe } from 'src/app/models/cafe';

@Component({
  selector: 'app-cafedetail',
  templateUrl: './cafedetail.component.html',
  styleUrls: ['./cafedetail.component.css'],
})
export class CafedetailComponent extends DefaultFormComponent<cafe> {
  cafeList: cafe[] = [];

  @Input() override item: any;
  @Input() override id: any;

  ngOnChanges(): void {
    if (this.item) {
      this.cafeList[0] = this.item;
    }
  }
  delete(id: any) {
    this.restService.deletesns(id).subscribe({
      next: () => {
        this.item;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`camp ID : ${id} Reserve Delete Complete`),
    });
    this.close();
    this.onRefresh();
  }
}
