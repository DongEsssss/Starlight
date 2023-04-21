import {Component, OnInit, ViewChild} from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { agreement } from 'src/app/models/contract-agreement';
import { DetailAgreementComponent } from '../../edc-detail-modal/detail-agreement/detail-agreement.component';

@Component({
  selector: 'app-contract-agreement',
  templateUrl: './contract-agreement.component.html',
  styleUrls: ['./contract-agreement.component.css']
})
export class ContractAgreementComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid', { static: true }) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  cSelection ?: any;
  searchText: any;
  agreementList :  agreement[] = [];

  columnDefs = [
    { headerName: 'ID'},
    { headerName: 'State'},
    { headerName: 'Type'},
    { headerName: 'UpdatedAt'},
    { headerName: 'CreatedAt'},
  ];

  async getRequestagreement() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestagreement().subscribe((resp: any) => {
      this.agreementList = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
      console.log(resp)
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }

  cancelagreement(id : any){
    this.id = id;
    console.log(id)
  }

  @ViewChild('agreementdetail', { static: true }) DetailModal !: DetailAgreementComponent;
  detailagreement(id: string) {
    this.id = id;
    this.restService.getagreement(id).subscribe((resp: any) => {
      this.item = resp
      console.log(resp)
    })
    this.DetailModal.open()
  }
}
