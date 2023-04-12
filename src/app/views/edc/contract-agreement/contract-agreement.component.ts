import {Component, OnInit, ViewChild} from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { agreement } from 'src/app/models/contract-agreement';

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
    { headerName: 'Type'},
    { headerName: 'State'},
    { headerName: 'UpdatedAt'},
    { headerName: 'CreatedAt'}
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
}
