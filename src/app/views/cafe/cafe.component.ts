import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CafedetailComponent } from '../detail/cafedetail/cafedetail.component';
import { cafe } from 'src/app/models/cafe';
import { themes } from 'src/app/models/Camp';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { DefaultComponent } from 'src/app/components/default.component';
import { ClrDatagrid } from '@clr/angular';
import { SnsComponent } from '../create/sns/sns.component';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
})
export class CafeComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid', { static: true }) cDataGrid!: ClrDatagrid;
  area = themes;
  searchText?: string;
  cafeList: cafe[] = [];
  cDataLoading: boolean = false;
  cSelection?: any;
  like?: 0;

  selectedItem: any;

  columnDefs = [
    { headerName: 'No', type: 'number', clrdgfield: 'no' },
    { headerName: '글제목', type: 'text', clrdgfield: 'title' },
    { headerName: '글쓴이', type: 'text', clrdgfield: 'writer' },
    { headerName: '등록일', type: 'date', clrdgfield: 'date' },
  ];

  async getsns() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getsns().subscribe((resp: any) => {
      this.cafeList = resp;
      this.cDataLoading = false;
    });
  }
  @ViewChild('cafedetail', { static: true }) DetailModal!: CafedetailComponent;
  detailcafe(id: string) {
    this.id = id;
    this.restService.detailsns(id).subscribe((resp: any) => {
      this.item = resp;
      console.log(resp);
    });
    this.DetailModal.open();
  }
  @ViewChild('addmodal', { static: false }) addmodal!: SnsComponent;
  createsns() {
    this.addmodal.open();
  }
  onSelectionChanged(selectedItem: any) {
    const selectedId = selectedItem.id;
    console.log('Selected ID:', selectedId);
  }
}
