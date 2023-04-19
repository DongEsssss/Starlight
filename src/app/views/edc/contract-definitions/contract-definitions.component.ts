import { Component, OnInit, ViewChild } from '@angular/core';
import { definitions } from 'src/app/models/contract-definitions';
import { CreateDefinitionsComponent } from '../../modal/create-definitions/create-definitions.component';
import { DefaultComponent } from 'src/app/components/default.component';
import { ClrDatagrid } from '@clr/angular';
import { DetailDefintionComponent } from '../../edc-detail-modal/detail-defintion/detail-defintion.component';

@Component({
  selector: 'app-contract-definitions',
  templateUrl: './contract-definitions.component.html',
  styleUrls: ['./contract-definitions.component.css']
})
export class ContractDefinitionsComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;
  searchText: any;
  cDataLoading: boolean;
  cSelection: any;
  definitionList : definitions[] =[];
  
  columnDefs = [
    { headerName: 'No' },
    { headerName: 'ID' },
    { headerName: 'Create Date'}
  ];

  defaultColDef = {
    editable: false,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: false,
    resizable: true,
    filter: false,
    flex: 1,
    minWidth: 100,
  };

  async getRequestDefintion() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestDefintion().subscribe((resp: any) => {
      this.definitionList = resp;      
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }

  //createmodal
  @ViewChild('definitions', { static: false }) definitions !: CreateDefinitionsComponent
  createbtn() {
    this.definitions.open();
  }

  delete(id: any):void{
    this.restService.deleteDefinition(id).subscribe({
      next: () => {
        this.getRequestDefintion();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Definition ID : ${id} Delete Complete`)
    });
  }

    /** detail */
    @ViewChild('detaildefintion', { static: false }) DetailModal!: DetailDefintionComponent;
    detaildefintions(id: string) {
      this.id = id;
      this.restService.getdefintion(id).subscribe((resp: any) => {
        this.item = resp
      })
      this.DetailModal.open()
    }
}
